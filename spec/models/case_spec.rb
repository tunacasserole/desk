require 'spec_helper'

describe "case" do

  describe "create" do

    it "should assign a guid" do
      data = create(Desk::Case)
      data.case_id.should_not be_empty
    end

    it "should assigns a nbr" do
      data = create(Desk::Case)
      data.case_nbr.should_not be_empty
    end

    it "should default the state to draft" do
      data = create(Desk::Case)
      data.state.should eq('draft')
    end

    it "should populate the requestor" do
      data = create(Desk::Case)
      # data.owner_id.should_not be_nile # need to learn how to simulate a logged in user  JASON TODO
    end

    it "should require a display name" do
      lambda{Desk:Case.create! :name => nil}.should raise_error
    end

    it "should require a unique display name" do
      create(Desk::Case, display: 'test case')
      case2 = build(Desk::Case, display: 'test case')
      case2.should_not be_valid
    end
  end

  describe "associations" do
    it "should belong to a project" do
      parent = create(Desk::Project)
      child = create(Desk::Case, project_id: parent.project_id)
      child.project.should be_valid
    end
    it "should have many tasks" do
      parent = create(Desk::Case)
      child = create(Desk::Task, taskable_type: 'Desk::Case', taskable_id: parent.case_id)
      parent.tasks.count.should eq(1)
    end

    it "should have many approvals" do
      parent = create(Desk::Case)
      child = create(Desk::Approval, approvable_type: 'Desk::Case', approvable_id: parent.case_id)
      parent.approvals.count.should eq(1)
    end

  end

end
