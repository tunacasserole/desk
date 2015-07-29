FactoryGirl.define do
  factory Desk::Approval do
    sequence(:display) {|n| "test #{n}"}
  end
  factory Desk::Case do
    sequence(:display) {|n| "test #{n}"}
    case_type 'BUG'
  end
  factory Desk::Checklist do
    sequence(:display) {|n| "test #{n}"}
  end
  factory Desk::Feature do
    sequence(:display) {|n| "test #{n}"}
  end
  factory Desk::Project do
    sequence(:display) {|n| "test #{n}"}
  end
  factory Desk::Task do
    sequence(:display) {|n| "test #{n}"}
  end
end

