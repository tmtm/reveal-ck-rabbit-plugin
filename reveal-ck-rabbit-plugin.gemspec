Gem::Specification.new do |spec|
  spec.name          = "reveal-ck-rabbit-plugin"
  spec.version       = '0.1'
  spec.licenses      = ['MIT']
  spec.authors       = ["TOMITA Masahiro"]
  spec.email         = ["tommy@tmtm.org"]

  spec.summary       = "reveal-ck rabbit plugin"
  spec.description   = "reveal-ck rabbit plugin"
  spec.homepage      = "http://github.com/tmtm/reveal-ck-rabbit-plugin"

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 10.0"
end
