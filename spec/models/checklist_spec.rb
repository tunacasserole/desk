require 'spec_helper'

describe "checklist" do

  describe "create" do

    it "should assign a guid" do
      data = create(Desk::Checklist)
      data.checklist_id.should_not be_empty
    end

    it "should assigns a nbr" do
      data = create(Desk::Checklist)
      data.checklist_nbr.should_not be_empty
    end

    it "should require a display name" do
      lambda{Desk:Checklist.create! :name => nil}.should raise_error
    end

    it "should require a unique display name" do
      create(Desk::Checklist, display: 'test checklist')
      data = build(Desk::Checklist, display: 'test checklist')
      data.should_not be_valid
    end
  end

  describe "associations" do
    it "should have many tasks" do
      parent = create(Desk::Checklist)
      child = create(Desk::Task, taskable_type: 'Desk::Checklist', taskable_id: parent.checklist_id)
      parent.tasks.count.should eq(1)
    end

  end

end

