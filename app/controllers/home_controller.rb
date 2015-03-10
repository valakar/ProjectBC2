class HomeController < ApplicationController
  def index
    # @user_graph = Koala::Facebook::API.new('CAACEdEose0cBACwdxexI72u4DAvUipkVBMNT5oAlvaEo8Dz1hEOBWBErWAKNL61zLRRqNpQVmPZAb8UMiJZAj6kuPKwxp5ZCTsT1AZBNZAGrlpNVpH1w6TPPZB6xKxzDoZBxQgl7SdDOqTWAsKM3K6Nz8zSxWlGdzvhmbvOZB7X6SPlQWROoEXbomCaDvYXI2MrXLGmhgZBtZCQgZDZD')
    # # @page_feed = @user_graph.get_connection('593091704154647', 'feed')
    # @page_feed = @user_graph.get_connection('593091704154647', 'posts',
    #                 {limit: 3,
    #                   fields: ['message', 'from', 'type', 'story',
    #                             'picture', 'link', 'created_time']})


    

    # @page_graph = Koala::Facebook::API.new(page_token)

    @oauth = Koala::Facebook::OAuth.new(1556918981243434, 'c267866fb3555c29feafd82ae493528c', 'https://intense-brook-3856.herokuapp.com/')
    # Get the new token
    oauth_access_token = @oauth.get_app_access_token
    @user_graph = Koala::Facebook::API.new(oauth_access_token)

    @page_feed = {}

    @page_feed =  @user_graph.get_connection('593091704154647', 'posts',
                    {limit: 3,
                      fields: ['message', 'from', 'type', 'story',
                                'picture', 'link', 'created_time']})

  end

  def shop
    require 'json'
    @data = File.read(File.join(Rails.root, 'app','json','products.json'))
    #json_response = "{\"addresses\":[{\"address\":\n{\"address\":\"1JdB88wMbd9u63rHkReuCLxaGEweaUydGA\",\"callback_url\":null,\"label\":null,\"created_at\":\"2014-08-14T18:17:17-07:00\"}},\n{\"address\":{\"address\":\"1MoaCahENJvTAnHrUUW3VgHHQd3yLzVv9G\",\"callback_url\":null,\"label\":null,\"created_at\":\"2014-08-14T01:04:08-07:00\"}},\n{\"address\":{\"address\":\"155KDpZrQN4wmMHV7ypC9ZV1fLeLdSEFAc\",\"callback_url\":null,\"label\":null,\"created_at\":\"2014-08-14T01:04:06-07:00\"}},\n{\"address\":{\"address\":\"18c6WUcgo5gJVj6QgpnH5ZX5aBhHpWSLYv\",\"callback_url\":null,\"label\":null,\"created_at\":\"2014-06-19T17:28:04-07:00\"}}],\n\"total_count\":4,\"num_pages\":1,\"current_page\":1}"
    json_response = @data
    hash_response = JSON.parse(json_response)
    @products = hash_response['products']
  end
end
