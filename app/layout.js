
import './globals.css'
import {Providers} from "./providers";


export const metadata = {
  title: 'Bunkar Banaras - Elegance Woven in Every Thread',
  description: 'Bunkar Banaras - Elegance Woven in Every Thread',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
  
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/*===============================================================================================*/}
    <link rel="icon" type="image/png" href="logo1.png" />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/bootstrap/css/bootstrap.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="fonts/iconic/css/material-design-iconic-font.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="fonts/linearicons-v1.0.0/icon-font.min.css"
    />
    {/*===============================================================================================*/}
    <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/css-hamburgers/hamburgers.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/animsition/css/animsition.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/select2/select2.min.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/daterangepicker/daterangepicker.css"
    />
    {/*===============================================================================================*/}
    <link rel="stylesheet" type="text/css" href="vendor/slick/slick.css" />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/MagnificPopup/magnific-popup.css"
    />
    {/*===============================================================================================*/}
    <link
      rel="stylesheet"
      type="text/css"
      href="vendor/perfect-scrollbar/perfect-scrollbar.css"
    />
    {/*===============================================================================================*/}
    
  
    </head>
      <body >
      <Providers>
      {children}

      </Providers>

      
      </body>

    </html>
  )
}
