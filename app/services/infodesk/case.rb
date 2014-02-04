class Infodesk::Case::Service
  include Buildit::Service::Base

  service 'Case', 'Infodesk.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Infodesk::Case
  end

end # class Infodesk::Case::Service
