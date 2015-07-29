require 'spec_helper'

describe "approval" do

  describe "create" do

    it "should assign a guid" do
      data = create(Desk::Approval)
      data.approval_id.should_not be_empty
    end

    it "should assigns a nbr" do
      data = create(Desk::Approval)
      data.approval_nbr.should_not be_empty
    end

    it "should default the state to active" do
      data = create(Desk::Approval)
      data.state.should eq('active')
    end

    it "should default the approval date to today" do
      data = create(Desk::Approval)
      data.approval_date.should eq(Date.today)
    end

    it "should populate the approver" do
      data = create(Desk::Approval)
      # data.owner_id.should_not be_nile # need to learn how to simulate a logged in user  JASON TODO
    end

  end
end
