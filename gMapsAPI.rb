require "httparty"



url = "http://api.randomuser.me"
response = HTTParty.get(url)

city = response["results"][0]["user"]["location"]["city"]
city.gsub!(" ", "+")
puts city

gmapurl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=GMAPKEY"
response2 = HTTParty.get(gmapurl)

latitude = response2["results"][0]["geometry"]["location"]["lat"]
longitude = response2["results"][0]["geometry"]["location"]["lng"]

puts latitude
puts longitude

