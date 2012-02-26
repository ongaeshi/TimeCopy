# -*- coding: utf-8 -*-
# original https://gist.github.com/715378
# thanks hakobe!
# Macで動作確認。Windowsの場合、spawnを使うとよいらしい。 参考: https://gist.github.com/325036

require 'webrick'

server = WEBrick::HTTPServer.new({
  :DocumentRoot => nil,
  :BindAddress => '0.0.0.0',
  :Port => 9090
})

['INT', 'TERM'].each {|signal|
  Signal.trap(signal){ server.shutdown }
}

last_pid = nil

server.mount_proc("/run") { |req, res|
  if last_pid
    Process.kill('KILL', last_pid)
  end

  last_pid = fork do
        exec "/Library/Application Support/Titanium/mobilesdk/osx/1.8.1/iphone/builder.py", "run", Dir.pwd
  end
  # system "coffee -o "+Dir.pwd+"/Resources/js/ -c "+Dir.pwd+"/Resources/coffee/"
  res["content-type"] = "text/html; charset=utf-8"
  res.body = "ok"
}
warn 'starting server at localhost:9090'
server.start
