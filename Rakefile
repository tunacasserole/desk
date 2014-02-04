#!/usr/bin/env rake
# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Desk::Application.load_tasks

namespace :desk do

  desc "run automated test suite"
  task :test => :environment do |t, args|
    # puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    @start_time = Time.now
    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
  end

  desc "index parker data one row at a time.  only for models that have the is_indexed attribute."
  task :index, [:model] => :environment do |t, args|
    puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    args.with_defaults(:model => "AllModels")
    # puts "Hello and #{args.model}"   #
    # puts "model is #{args[:model]}"  # both notations work
    @start_time = Time.now
    Desk::Sync::Base.index(args.model)
    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
  end

  desc "sync parker data from spreadsheets, staging tables, and other databases"
  task :sync, [:model] => :environment do |t, args|
    puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    args.with_defaults(:model => "AllModels")
    # puts "Hello and #{args.model}"   #
    # puts "model is #{args[:model]}"  # both notations work
    @start_time = Time.now
    Desk::Sync::Base.go(args.model)
    puts "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s\n"
  end

  namespace :sync do
    namespace :mark do
      desc "load Desk inventory from RMS inventory."
      task :inventory => :environment do |t, args|
        Desk::Sync::Mark.inventory
      end
      desc "load Desk daily results net sale units from Mark order line qty_ordered."
      task :results => :environment do |t, args|
        Desk::Sync::Mark.results
      end
    end

    namespace :rms do
      desc "load Desk daily results net sale units from rms."
      task :inventory => :environment do |t, args|
        Desk::Sync::Rms.inventory
      end
      desc "load Desk daily results net sale units from rms transaction_entry quantity."
      task :results => :environment do |t, args|
        Desk::Sync::Rms.results
      end
    end

    namespace :grits do
      desc "load Desk inventory on hand from the RMS System."
      task :inventory => :environment do |t, args|
        Desk::Sync::Grits.inventory
      end
      desc "load Desk daily results from sales history from the RMS System."
      task :results => :environment do |t, args|
        Desk::Sync::Grits.results
      end
    end

    namespace :desk do
      desc "load Desk daily results from sales history from the RMS System."
      task :results => :environment do |t, args|
        Desk::Sync::Desk.results
      end
      desc "Run the back to school report"
      task :bts => :environment do |t, args|
        Desk::Sync::Desk.bts
      end
    end
  end

  desc "Drops all unused tables from the source"
  task :drop => :environment do

    exit 0 unless ENV['FORCE'] == 'true'

    USED_TABLES_SYM = [
      # REQUIRED tables
      :schema_migrations,
      :seeds,

      # BUILDIT tables
      :applications,
      :application_roles,
      :attachments,
      :contents,
      :dashlets,
      :events,
      :exports,
      :lookups,
      :modules,
      :notes,
      :permissions,
      :privileges,
      :roles,
      :sequences,
      :user_roles,
      :users,
      :vendors,
      :comm_email_addresses,
      :comm_inbox_items,
      :comm_email_messages,
      :comm_outbox_items,
      :comm_sent_items,
    ]

    USED_TABLES = USED_TABLES_SYM.map{|x| x.to_s}

    USED_TABLES_SYM.each {|x| USED_TABLES << x.to_s.upcase}

    conn = ActiveRecord::Base.connection
    drop_tables = conn.tables - USED_TABLES

    drop_tables.each do |table_name|
      begin
        conn.drop_table table_name
      rescue
      end
    end
  end

  desc "Generates Binary Conversion"
  task :convert => :environment do

    exit 0 unless ENV['FORCE'] == 'true'

    conn   = ActiveRecord::Base.connection
    tables = conn.tables
    exclusions = ['data']

    # Drop all indexes first
    indexes = conn.execute("SELECT name,OBJECT_NAME(ID) AS 'table', * FROM [dbo].[sysindexes] WHERE OBJECTPROPERTY(ID,N'IsTable') = 1 AND OBJECTPROPERTY(ID,N'IsMSShipped') = 0 AND name IS NOT NULL AND status = 0")
    indexes.each do |index|
      idxName = index['name']
      table   = index['table']

      if tables.include? table
        dropIndex = "DROP INDEX [#{idxName}] ON [dbo].[#{table}]"
        conn.execute dropIndex
      end
    end

    # Drop primary keys
    tables.each do |table|
      pks = conn.execute("SELECT name FROM [dbo].[sysobjects] WHERE xtype in ('F', 'PK', 'C', 'D', 'UQ') AND parent_obj = OBJECT_ID('#{table}')")
      pks.each do |key|
        conn.execute("ALTER TABLE #{table} DROP CONSTRAINT #{key['name']}")
      end
    end


    # rename the binary columns with _bin and copy data to new column
    tables.each do |table|
      conn.columns(table).each do |col|
        if col.type == :binary
          unless exclusions.include?(col.name)
            conn.rename_column table, col.name, "#{col.name}_bin"
            conn.add_column table, col.name, :string, :limit => 32
            conn.execute("UPDATE #{table} SET #{col.name} = CONVERT(NVARCHAR(34), #{col.name}_bin, 2);\n")
          end
        end
      end
    end


    tables.each do |table|
      conn.columns(table).each do |col|
        if col.type == :binary
          unless exclusions.include?(col.name)
            conn.remove_column table, col.name
          end
        end
      end
    end

  end

  # ------------------------------------------------------------------------------
  # DOCUMENTATION Tasks
  # ------------------------------------------------------------------------------

  desc "Generates the model specs"
  task :document do

    [
      'desk::Customer 01',
      # 'desk::CustomerNeed 02',
      # 'desk::CustomerProduct 03',

      # 'desk::Person 04',
      # 'desk::Address 05',
      # 'desk::Telephone 06',
      # 'desk::EmailAddress 07',

      # 'desk::Project 08',
      # 'desk::TollgateTrack 09',
      # 'desk::TollgateCheckpoint 10',
      # 'desk::FinancialScorecard 11',

      # 'desk::Sample 12',
      # 'desk::SampleApproval 13',


      # 'desk::SalesCall 14',
      # 'desk::SalesCallPerson 15',

      # 'desk::Cfar 16',
      # 'desk::CfarApproval 17',
      # 'desk::CfarFollowup 18',
      # 'desk::CfarNotification 19',

      # 'desk::Track 20',
      # 'desk::Checkpoint 21',
      # 'desk::QualityPlant 22',
      # 'desk::Severity 23',
      # 'desk::Probability 24',
      # 'desk::Product 25'

    ].each do |doc|
      system("rails g buildit:model_spec #{doc}")
    end

    system("./doc/model_specs/wordsmith generate")
  end

  # ------------------------------------------------------------------------------
  # BUILD Tasks
  # ------------------------------------------------------------------------------

  desc 'Generates the WAR file for deployment to server'
  task :war do
    system("warble")
  end

  desc 'Performs all release steps to generate WAR'
  task :release do
    Rake::Task['assets:precompile'].invoke
    Rake::Task['desk:war'].invoke
  end


  # ------------------------------------------------------------------------------
  # DEPLOYMENT Tasks
  # ------------------------------------------------------------------------------

  namespace :deploy  do
    # List of environments and their heroku git remotes
    REMOTES = {
      :staging    => 'desk-prod',
      :prod       => 'desk-jruby'
    }

    REMOTES.keys.each do |env|
      desc "Deploy to #{env} remote at Heroku"
      task env do
        current_branch = `git branch | grep ^* | awk '{ print $2 }'`.strip

        Rake::Task['desk:deploy:before_deploy'].invoke(env, current_branch)
        Rake::Task['desk:deploy:update_code'].invoke(env, current_branch)
        Rake::Task['desk:deploy:after_deploy'].invoke(env, current_branch)
      end
    end

    task :before_deploy, :env, :branch do |t, args|
      puts "Deploying #{args[:branch]} to #{args[:env]}"

      # Ensure the user wants to deploy a non-master branch to production
      if args[:env] == :production && args[:branch] != 'master'
        print "Are you sure you want to deploy '#{args[:branch]}' to production? (y/n) " and STDOUT.flush
        char = $stdin.getc
        if char != ?y && char != ?Y
          puts "Deploy aborted"
          exit
        end
      end
    end

    task :after_deploy, :env, :branch do |t, args|

      system('heroku run rake buildit:db:seed')

      puts "Deployment Complete"
    end

    task :update_code, :env, :branch do |t, args|
      FileUtils.cd Rails.root do
        puts "Updating #{REMOTES[args[:env]]} with branch #{args[:branch]}"
        `git push #{REMOTES[args[:env]]} +#{args[:branch]}:master`
      end
    end
  end
end

