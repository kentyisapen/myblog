unless Rails.env.development? || Rails.env.test?
  CarrierWave.configure do |config|
    config.fog_credentials = {
      provider: 'AWS',
      aws_access_key_id: 'AKIASCWW2F3S7ROVA77C',
      aws_secret_access_key: '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',
      region: 'ap-northeast-1'
    }

    config.fog_directory  = 'rails-image-9869'
    config.cache_storage = :fog
  end
end