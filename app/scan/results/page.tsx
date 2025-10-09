import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  GitBranch,
  Calendar,
  User,
  FileText,
  ExternalLink,
  Download,
  RefreshCw,
} from "lucide-react"

export default function ScanResultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-900">DeployCheck</h1>
            </div>
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              New Scan
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Repository Info */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <GitBranch className="w-6 h-6 text-slate-600" />
                <div>
                  <CardTitle className="text-2xl">acme-corp/my-nextjs-app</CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-1">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      john-doe
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Scanned 2 minutes ago
                    </span>
                  </CardDescription>
                </div>
              </div>
              <Badge variant="destructive" className="flex items-center gap-1">
                <XCircle className="w-3 h-3" />
                Issues Found
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Scan Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Overall Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-amber-600">72%</div>
                <div className="flex-1">
                  <Progress value={72} className="h-2" />
                  <p className="text-xs text-slate-500 mt-1">Deployment Ready</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Issues Found</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-red-600">3</div>
                <div className="flex gap-2">
                  <Badge variant="destructive" className="text-xs">
                    2 Critical
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    1 Warning
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Target Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">▲</span>
                </div>
                <div>
                  <div className="font-semibold">Vercel</div>
                  <div className="text-xs text-slate-500">Serverless Functions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Issues Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Compatibility Issues
            </CardTitle>
            <CardDescription>Issues that may prevent successful deployment or cause runtime errors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Critical Issue 1 */}
            <Alert className="border-red-200 bg-red-50">
              <XCircle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800">Critical: Missing Environment Variables</AlertTitle>
              <AlertDescription className="text-red-700 mt-2">
                <div className="space-y-2">
                  <p>Required environment variables are not configured in your deployment settings.</p>
                  <div className="bg-red-100 p-3 rounded-md font-mono text-sm">
                    <div>Missing variables:</div>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>DATABASE_URL</li>
                      <li>NEXTAUTH_SECRET</li>
                      <li>STRIPE_SECRET_KEY</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="outline" className="text-xs">
                      <FileText className="w-3 h-3 mr-1" />
                      .env.example:12-15
                    </Badge>
                    <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Fix Guide
                    </Button>
                  </div>
                </div>
              </AlertDescription>
            </Alert>

            {/* Critical Issue 2 */}
            <Alert className="border-red-200 bg-red-50">
              <XCircle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800">Critical: Incompatible Node.js Version</AlertTitle>
              <AlertDescription className="text-red-700 mt-2">
                <div className="space-y-2">
                  <p>Your package.json specifies Node.js 16.x, but Vercel requires Node.js 18.x or higher.</p>
                  <div className="bg-red-100 p-3 rounded-md font-mono text-sm">
                    <div>Current: "node": "^16.14.0"</div>
                    <div className="text-green-700">Recommended: "node": "^18.17.0"</div>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="outline" className="text-xs">
                      <FileText className="w-3 h-3 mr-1" />
                      package.json:89
                    </Badge>
                    <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                      <Download className="w-3 h-3 mr-1" />
                      Auto-fix
                    </Button>
                  </div>
                </div>
              </AlertDescription>
            </Alert>

            {/* Warning */}
            <Alert className="border-amber-200 bg-amber-50">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800">Warning: Large Bundle Size</AlertTitle>
              <AlertDescription className="text-amber-700 mt-2">
                <div className="space-y-2">
                  <p>Your application bundle is larger than recommended, which may impact cold start performance.</p>
                  <div className="bg-amber-100 p-3 rounded-md font-mono text-sm">
                    <div>Current bundle size: 2.4 MB</div>
                    <div>Recommended: &lt; 1.5 MB</div>
                    <div className="mt-2">Largest chunks:</div>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>node_modules/lodash: 547 KB</li>
                      <li>components/dashboard: 312 KB</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="outline" className="text-xs">
                      <FileText className="w-3 h-3 mr-1" />
                      webpack-bundle-analyzer
                    </Badge>
                    <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Optimization Guide
                    </Button>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Recommended Actions
            </CardTitle>
            <CardDescription>Follow these steps to resolve compatibility issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">Configure Environment Variables</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Add the missing environment variables to your Vercel project settings.
                  </p>
                  <Button size="sm" className="mt-2">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Vercel Dashboard
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">Update Node.js Version</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Update your package.json to specify Node.js 18.x or higher.
                  </p>
                  <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Apply Auto-fix
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">Optimize Bundle Size</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Consider tree-shaking unused code and replacing heavy dependencies.
                  </p>
                  <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                    <FileText className="w-4 h-4 mr-2" />
                    View Optimization Tips
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Rescan Repository
          </Button>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button>
              <ExternalLink className="w-4 h-4 mr-2" />
              Deploy to Vercel
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
