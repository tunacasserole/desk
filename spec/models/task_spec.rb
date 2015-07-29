require 'spec_helper'

describe "task" do

  describe "create" do

    it "should assign a guid" do
      data = create(Desk::Task)
      data.task_id.should_not be_nil
    end

    it "should assigns a nbr" do
      data = create(Desk::Task)
      data.task_nbr.should_not be_nil
    end

    it "should populate the owner" do
      data = create(Desk::Task)
      # data.owner_id.should_not be_nile # need to learn how to simulate a logged in user  JASON TODO
    end

  end

end

