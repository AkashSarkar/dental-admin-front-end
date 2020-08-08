import Dashboard from './pages/Dashboard/dashboard';

import Calendar from './pages/Calendar/calendar';

import EmailInbox from './pages/Email/email-inbox';
import EmailRead from './pages/Email/email-read';
import EmailCompose from './pages/Email/email-compose';

import Emailtemplatealert from './pages/Email/email-template-alert';
import Emailtemplatebasic from './pages/Email/email-template-basic';
import Emailtemplatebilling from './pages/Email/email-template-billing';

import Uialerts from './pages/Ui/ui-alerts';
import Uibuttons from './pages/Ui/ui-buttons';
import Uicards from './pages/Ui/ui-cards';
import Uicarousel from './pages/Ui/ui-carousel';
import Uidropdowns from './pages/Ui/ui-dropdowns';
import Uigrid from './pages/Ui/ui-grid';
import Uiimages from './pages/Ui/ui-images';
import Uilightbox from './pages/Ui/ui-lightbox';
import Uimodals from './pages/Ui/ui-modals';
import Uirangeslider from './pages/Ui/ui-rangeslider';
import UisessionTimeout from './pages/Ui/ui-session-timeout';
import Uiprogressbars from './pages/Ui/ui-progressbars';
import Uisweetalert from './pages/Ui/ui-sweet-alert';
import Uitabsaccordions from './pages/Ui/ui-tabs-accordions';
import Uitypography from './pages/Ui/ui-typography';
import Uivideo from './pages/Ui/ui-video';
import Uigeneral from './pages/Ui/ui-general';
import Uicolors from './pages/Ui/ui-colors';
import Uirating from './pages/Ui/ui-rating';

import FormElements from './pages/Forms/form-elements';
import FormValidation from './pages/Forms/form-validation';
import FormAdvanced from './pages/Forms/form-advanced';
import FormEditors from './pages/Forms/form-editors';
import FormUpload from './pages/Forms/form-uploads';
import FormXeditable from './pages/Forms/form-xeditable';
import FormRepeater from './pages/Forms/form-repeater';
import FormWizard from './pages/Forms/form-wizard';
import FormMask from './pages/Forms/form-mask';

import ChartApex from './pages/Charts/charts-apex';
import ChartChartist from './pages/Charts/charts-chartist';
import ChartChartjs from './pages/Charts/charts-chartjs';
import ChartKnob from './pages/Charts/charts-knob';
import ChartEchart from './pages/Charts/charts-echart';
import ChartSparkline from './pages/Charts/charts-sparkline';

import BasicTable from './pages/Tables/tables-basic';
import EditableTable from './pages/Tables/tables-editable';
import ResponsiveTable from './pages/Tables/tables-responsive';
import DataTable from './pages/Tables/tables-datatable';

import MaterialDesign from './pages/Icons/icons-material';
import FontAwesome from './pages/Icons/icons-fontawesome';
import IonIcons from './pages/Icons/icons-ion';
import ThemifyIcons from './pages/Icons/icons-themify';
import Dripicons from './pages/Icons/icons-dripicons';
import TypIcons from './pages/Icons/icons-typicons';

import GoogleMap from './pages/Maps/maps-google';
import VectorMap from './pages/Maps/maps-vector';

import Timeline from './pages/ExtraPages/pages-timeline';
import Invoice from './pages/ExtraPages/pages-invoice';
import Directory from './pages/ExtraPages/pages-directory';
import BlankPage from './pages/ExtraPages/pages-blank';
import Error404 from './pages/ExtraPages/pages-404';
import Error500 from './pages/ExtraPages/pages-500';
import Pricing from './pages/ExtraPages/pages-pricing';
import Gallery from './pages/ExtraPages/pages-gallery';
import Maintenance from './pages/ExtraPages/pages-maintenance';
import ComingSoon from './pages/ExtraPages/pages-comingsoon';
import Faq from './pages/ExtraPages/pages-faq';

import Pageslogin2 from './pages/ExtraPages/pages-login-2';
import Pagesregister2 from './pages/ExtraPages/pages-register-2';
import Pagesrecoverpw2 from './pages/ExtraPages/pages-recoverpw-2';
import Pageslockscreen2 from './pages/ExtraPages/pages-lock-screen-2';

import Pageslogin from './features/auth/Login';
import Logout from './pages/Auth/Logout';
import Pagesregister from './pages/Auth/Register';
import ForgetPassword from './pages/Auth/ForgetPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import Home from './Home';
import CompanyProfile from './features/dashboard/CompanyProfile';
import Sliders from './features/dashboard/sliders/Sliders';
import AddSlider from './features/dashboard/sliders/AddSlider';

const routes = [

  // public Routes
  { path: '/login', component: Pageslogin, ispublic: true },
  { path: '/logout', component: Logout, ispublic: true },
  { path: '/register', component: Pagesregister, ispublic: true },
  { path: '/forget-password', component: ForgetPassword, ispublic: true },
  { path: '/reset-password', component: ResetPassword, ispublic: true },

  // Calendar
  { path: '/calendar', component: Calendar },

  // Email & Email Templates
  { path: '/email-inbox', component: EmailInbox },
  { path: '/email-read', component: EmailRead },
  { path: '/email-compose', component: EmailCompose },
  { path: '/email-template-alert', component: Emailtemplatealert },
  { path: '/email-template-basic', component: Emailtemplatebasic },
  { path: '/email-template-billing', component: Emailtemplatebilling },

  // Ui Elements
  { path: '/ui-alerts', component: Uialerts },
  { path: '/ui-buttons', component: Uibuttons },
  { path: '/ui-cards', component: Uicards },
  { path: '/ui-carousel', component: Uicarousel },
  { path: '/ui-dropdowns', component: Uidropdowns, ispublic: true },
  { path: '/ui-grid', component: Uigrid },
  { path: '/ui-images', component: Uiimages },
  { path: '/ui-lightbox', component: Uilightbox },
  { path: '/ui-modals', component: Uimodals },
  { path: '/ui-rangeslider', component: Uirangeslider },
  { path: '/ui-session-timeout', component: UisessionTimeout },
  { path: '/ui-progressbars', component: Uiprogressbars },
  { path: '/ui-sweet-alert', component: Uisweetalert },
  { path: '/ui-tabs-accordions', component: Uitabsaccordions },
  { path: '/ui-typography', component: Uitypography },
  { path: '/ui-video', component: Uivideo },
  { path: '/ui-general', component: Uigeneral },
  { path: '/ui-colors', component: Uicolors },
  { path: '/ui-rating', component: Uirating },

  // Form Elements
  { path: '/form-elements', component: FormElements },
  { path: '/form-validation', component: FormValidation },
  { path: '/form-advanced', component: FormAdvanced },
  { path: '/form-editors', component: FormEditors },
  { path: '/form-uploads', component: FormUpload },
  { path: '/form-xeditable', component: FormXeditable },
  { path: '/form-repeater', component: FormRepeater },
  { path: '/form-wizard', component: FormWizard },
  { path: '/form-mask', component: FormMask },

  // Charts
  { path: '/charts-apex', component: ChartApex },
  { path: '/charts-chartist', component: ChartChartist },
  { path: '/charts-chartjs', component: ChartChartjs },
  { path: '/charts-knob', component: ChartKnob },
  { path: '/charts-echart', component: ChartEchart },
  { path: '/charts-sparkline', component: ChartSparkline },

  // Tables
  { path: '/tables-basic', component: BasicTable },
  { path: '/tables-editable', component: EditableTable },
  { path: '/tables-responsive', component: ResponsiveTable },
  { path: '/tables-datatable', component: DataTable },

  // Icons
  { path: '/icons-material', component: MaterialDesign },
  { path: '/icons-fontawesome', component: FontAwesome },
  { path: '/icons-ion', component: IonIcons },
  { path: '/icons-themify', component: ThemifyIcons },
  { path: '/icons-dripicons', component: Dripicons },
  { path: '/icons-typicons', component: TypIcons },

  // Maps
  { path: '/maps-google', component: GoogleMap },
  { path: '/maps-vector', component: VectorMap },

  // Extra pages
  { path: '/pages-invoice', component: Invoice },
  { path: '/pages-directory', component: Directory },
  { path: '/pages-timeline', component: Timeline },
  { path: '/pages-blank', component: BlankPage },
  { path: '/pages-404', component: Error404 },
  { path: '/pages-500', component: Error500 },
  { path: '/pages-pricing', component: Pricing },
  { path: '/pages-gallery', component: Gallery },
  { path: '/pages-maintenance', component: Maintenance },
  { path: '/pages-comingsoon', component: ComingSoon },
  { path: '/pages-faq', component: Faq },

  { path: '/pages-login-2', component: Pageslogin2 },
  { path: '/pages-register-2', component: Pagesregister2 },
  { path: '/pages-recoverpw-2', component: Pagesrecoverpw2 },
  { path: '/pages-lock-screen-2', component: Pageslockscreen2 },

  // Dashboard
  { path: '/company-profile', component: CompanyProfile },
  { path: '/sliders', component: Sliders },
  { path: '/add-slider', component: AddSlider },
  { path: '/', component: Home }

];

export default routes;
