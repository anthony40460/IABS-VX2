import { ThemeProvider } from "./components/ui/theme-provider"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import AuthGuard from './components/auth/AuthGuard';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PricingSection from './components/pricing/PricingSection';
import ServicesSection from './components/services/ServicesSection';
import ServiceDetail from './components/services/ServiceDetail';
import PortfolioSection from './components/portfolio/PortfolioSection';
import PortfolioDetail from './components/portfolio/PortfolioDetail';
import ContactSection from './components/contact/ContactSection';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ForgotPasswordForm from './components/auth/ForgotPasswordForm';
import ResetPasswordForm from './components/auth/ResetPasswordForm';
import Dashboard from './components/dashboard/Dashboard';
import PaymentSuccess from './components/billing/PaymentSuccess';
import AdminDashboard from './components/admin/AdminDashboard';
import Footer from './components/Footer';
import ConsultantPage from './pages/ConsultantPage';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ia-business-theme">
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesSection />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/pricing" element={<PricingSection />} />
              <Route path="/portfolio" element={<PortfolioSection />} />
              <Route path="/portfolio/:id" element={<PortfolioDetail />} />
              <Route path="/become-consultant" element={<ConsultantPage />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/forgot-password" element={<ForgotPasswordForm />} />
              <Route path="/reset-password" element={<ResetPasswordForm />} />
              <Route path="/dashboard/*" element={
                <AuthGuard>
                  <Dashboard />
                </AuthGuard>
              } />
              <Route path="/billing/success" element={
                <AuthGuard>
                  <PaymentSuccess />
                </AuthGuard>
              } />
              <Route path="/admin/*" element={
                <AuthGuard>
                  <AdminDashboard />
                </AuthGuard>
              } />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}