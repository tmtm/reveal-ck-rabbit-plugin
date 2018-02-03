Gem::Specification.new do |spec|
  spec.name          = "reveal-ck-rabbit-plugin"
  spec.version       = '0.2'
  spec.licenses      = ['MIT']
  spec.authors       = ["TOMITA Masahiro"]
  spec.email         = ["tommy@tmtm.org"]

  spec.summary       = "reveal-ck rabbit plugin"
  spec.description   = "reveal-ck rabbit plugin"
  spec.homepage      = "http://github.com/tmtm/reveal-ck-rabbit-plugin"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(LICENSE|README.md|css|exe|images|plugin)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 10.0"
end
