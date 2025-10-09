import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, GitBranch, Zap, Shield, Clock, ArrowRight, Github, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">DeployCheck</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-600 hover:text-cyan-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-600 hover:text-cyan-600 transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-cyan-600 transition-colors">
                Pricing
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              ✨ Trusted by 10,000+ developers
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Deploy with
              <span className="text-cyan-600"> Confidence</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Scan your GitHub repositories for deployment compatibility. Get instant recommendations to ensure your
              code deploys successfully on Vercel, Fly.io, and other platforms.
            </p>

            {/* Repository Input */}
            <div className="max-w-2xl mx-auto mb-8">
              <Card className="p-6 bg-white shadow-lg border-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="https://github.com/username/repository"
                      className="h-12 text-lg border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 h-12 px-8">
                    <Github className="w-5 h-5 mr-2" />
                    Scan Repository
                  </Button>
                </div>
                <p className="text-sm text-slate-500 mt-3 text-left">
                  Free scan • No signup required • Results in 30 seconds
                </p>
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <img src="/placeholder.svg?height=24&width=24" alt="Vercel" className="w-6 h-6" />
                <span>Vercel</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/placeholder.svg?height=24&width=24" alt="Fly.io" className="w-6 h-6" />
                <span>Fly.io</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/placeholder.svg?height=24&width=24" alt="Netlify" className="w-6 h-6" />
                <span>Netlify</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/placeholder.svg?height=24&width=24" alt="Railway" className="w-6 h-6" />
                <span>Railway</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything you need for successful deployments</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our comprehensive analysis covers all aspects of deployment readiness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle className="text-xl">Instant Analysis</CardTitle>
                <CardDescription>
                  Get deployment compatibility results in under 30 seconds with our advanced scanning engine.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Security Checks</CardTitle>
                <CardDescription>
                  Identify potential security vulnerabilities and get recommendations for secure deployments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <GitBranch className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Multi-Platform Support</CardTitle>
                <CardDescription>
                  Check compatibility across Vercel, Fly.io, Netlify, Railway, and more deployment platforms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Performance Optimization</CardTitle>
                <CardDescription>
                  Get suggestions to optimize your app's performance and reduce deployment times.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Detailed Reports</CardTitle>
                <CardDescription>
                  Receive comprehensive reports with step-by-step fixes and best practices.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Framework Detection</CardTitle>
                <CardDescription>
                  Automatically detect React, Next.js, Vue, Svelte, and other frameworks with tailored recommendations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How DeployCheck Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Three simple steps to deployment confidence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Connect Repository</h3>
              <p className="text-slate-600">
                Simply paste your GitHub repository URL. We support both public and private repositories.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Automated Scan</h3>
              <p className="text-slate-600">
                Our AI analyzes your code structure, dependencies, and configuration files for deployment readiness.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Get Recommendations</h3>
              <p className="text-slate-600">
                Receive detailed recommendations and step-by-step instructions to fix any deployment issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to deploy with confidence?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust DeployCheck to ensure their applications deploy successfully every
            time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-slate-50">
              Start Free Scan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">DeployCheck</span>
              </div>
              <p className="text-slate-400">Ensuring successful deployments for developers worldwide.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 DeployCheck. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
