require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AngularRailsDay3
  class Application < Rails::Application
    config.generators do |c|
      c.javascripts false
      c.stylesheets false
      c.helper false
      c.test_framework false
    end
  end
end
