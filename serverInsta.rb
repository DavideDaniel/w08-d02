require "sinatra"
require "httparty"

pictures = []

get '/' do
  tag = "kitten"
  url = "https://api.instagram.com/v1/tags/#{tag}/media/recent?client_id=INSTAPIKEY"
  response = HTTParty.get(url)

  responses = response["data"]

  responses.each do |response|
    pictures << response["images"]["standard_resolution"]["url"]
  end
  erb :index, locals: {pictures: pictures}

end
