require "sinatra"
require "httparty"



get '/' do
  erb :insta, locals: {pictures: pictures}

end

get '/city' do
  city = params[:city]
  city.gsub!(" ", "+")
  puts city
  pictures = []

  gmapurl = "https://maps.googleapis.com/maps/api/geocode/json?address=#{city}&key=AIzaSyC8_DGuXp9opGPaYNjOlWAB8RqcvDsdP3A"
  googleResponse = HTTParty.get(gmapurl)
  latitude = googleResponse["results"][0]["geometry"]["location"]["lat"]
  longitude = googleResponse["results"][0]["geometry"]["location"]["lng"]
  puts latitude

  insta_url = "https://api.instagram.com/v1/media/search?lat=#{latitude}&lng=#{longitude}&client_id=9ceea7f48b5547288fd4bd7e8353b739"
  response_Insta = HTTParty.get(insta_url)

  responses = response_Insta["data"]

  responses.each do |response|
    pictures << response["images"]["standard_resolution"]["url"]
  end
  erb :insta, locals: {pictures: pictures}
end
