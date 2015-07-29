require 'spec_helper'

describe "project" do

  describe "create" do

    it "should assign a guid" do
      data = create(Desk::Project)
      data.project_id.should_not be_empty
    end

    it "should assigns a nbr" do
      data = create(Desk::Project)
      data.project_nbr.should_not be_empty
    end

    it "should default the state to draft" do
      data = create(Desk::Feature)
      data.state.should eq('draft')
    end

    it "should require a display name" do
      lambda{Desk:Project.create! :name => nil}.should raise_error
    end

    it "should require a unique display name" do
      create(Desk::Project, display: 'test project')
      data = build(Desk::Project, display: 'test project')
      data.should_not be_valid
    end
  end

  describe "associations" do
    it "should belong to a project" do
      parent = create(Desk::Project)
      child = create(Desk::Feature, project_id: parent.project_id)
      child.project.should be_valid
    end

  end

end

