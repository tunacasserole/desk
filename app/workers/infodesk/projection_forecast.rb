class Desk::ProjectionForecast
  @queue = :projection_queue

  def self.perform(projection_id)
	@queue = :projection_queue
    puts "\n******** PROJECTION FORECAST QUEUEING ************\n"
    Desk::Projection.do_forecast(projection_id)
    puts "\n******** END - PROJECTION FORECAST QUEUEING ************\n"
    puts "resque is ready..."
  end
end
