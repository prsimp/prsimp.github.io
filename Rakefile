require 'haml'

haml_dir      = "_haml"
layout_dir    = "_layouts"
remote_server = "trixie"
remote_dir    = "/home/prs/web/"
site_address  = "http://thepaulsimpson.com"

namespace :haml do
  desc "Clean html layouts"
  task :clean do
    print "Deleting html layouts..."
    system "rm -rf _layouts/*"
    puts "done."
  end

  desc "Parse haml layouts"
  task :parse => [:clean] do
    print "Parsing haml layouts..."
    Rake::FileList.new("#{haml_dir}/*.haml").each do |f|
      # I should find a more elegant way to do this...
      html_output = layout_dir + "/" + f.split("/")[1].sub(/haml/,'html')
      
      File.open(html_output, 'w') do |output|
        output.puts Haml::Engine.new(File.read(f), :format => :html5, :attr_wrapper => "\"").to_html
      end
    end
    puts "done."
  end
end

namespace :compass do
  desc "Clean css files"
  task :clean do
    print "Cleaning css files..."
    system "rm -rf css/*"
    puts "done."
  end

  desc "Run compass in watch mode"
  task :watch => [:clean] do
    system "compass watch"
  end

  desc "Compile SCSS to css"
  task :compile => [:clean] do
    system "compass compile -s compressed"
  end
end

namespace :jekyll do
  desc "Clean _site files"
  task :clean do
    print "Cleaning jekyll site files..."
    system "rm -rf _site/*"
    puts "done."
  end

  desc "Run jekyll in development mode"
  task :server => [:clean, 'haml', 'compass'] do
    puts "You must start compass watch in another terminal." # TODO
    system "jekyll --auto --server"
  end

  desc "Generate site"
  task :generate => [:clean, 'haml', 'compass'] do
    system "jekyll"
  end
end

task :haml    => ['haml:parse']
task :compass => ['compass:compile']
task :jekyll  => ['jekyll:generate']
task :dev     => ['jekyll:server']

desc "Deploy!"
task :deploy => ['jekyll:generate'] do
  system "rsync -v -r -c --delete _site/ #{remote_server}:#{remote_dir}"
  system "open #{site_address}"
end

desc "Write new post"
task :post do
  puts "Not implemented yet :("
end
