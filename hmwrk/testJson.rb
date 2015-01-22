require 'json'

keys = JSON.parse( IO.read('APIkeys.JSON'))

puts keys["GoogleMaps"]
puts keys["Instagram"]["ClientSecret"]