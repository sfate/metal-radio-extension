trap("INT") { puts "\nCatched ^-C signal. Quiting..."; exit(0) }

namespace :extension do
  desc 'Build complete chrome-extension.'
  task :build do
    %x[compass compile -c compass_config.rb]
    %x[zip -r 'metal-radio.zip' 'chrome-extension']
  end
  task :clear do
    %x[compass clean]
  end
end

#TODO: write tasks code
namespace :stations do
  desc 'Add new station to stations.json'
  task :add do
  end
  desc 'Remove station from stations.json'
  task :remove do
  end
  desc 'Update manifest file from stations list.'
  task :update_manifest do
  end
end

namespace :compass do
  desc 'Run compass:watch with parameters'
  task :watch do
    %x[compass watch -c compass_config.rb]
  end
end
