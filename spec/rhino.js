
load('/Library/Ruby/Gems/1.8/gems/jspec-4.3.1/lib/jspec.js')
load('/Library/Ruby/Gems/1.8/gems/jspec-4.3.1/lib/jspec.xhr.js')
load('lib/yourlib.js')
load('spec/unit/spec.helper.js')

JSpec
.exec('spec/unit/spec.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
.report()