class CreateCases < ActiveRecord::Migration
  def change
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    # unless ActiveRecord::Base.connection.tables.include?('cases')
    @connection = ActiveRecord::Base.connection
    drop_table :cases if ActiveRecord::Base.connection.tables.include?('cases')
      create_table(:cases, :id => false) do |t|
        t.column   :case_id,                         :string,            :null  =>  false,   :limit   => 32
        t.column   :user_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :agent_id,                        :string,            :null  =>  true,    :limit   => 32
        t.column   :state,                           :string,            :null  =>  false,   :limit   => 100
        t.column   :summary,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :tags,                            :string,            :null  =>  false,   :limit   => 200
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 500
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    # end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
