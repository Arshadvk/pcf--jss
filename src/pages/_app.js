// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const App = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName}`}</title>
        <meta
          name='description'
          content={`People's Cultural Forum (PCF) is the diaspora wing of the People's Democratic Party (PDP), led by Abdul Nasser Madani. We are a unified organization operating across the GCC countries, including the UAE, dedicated to addressing the diverse issues faced by the expatriate community. Our formation stemmed from the principles of 'oppressed party politics' championed by Abdul Nasser Madani. Post-2000, our independent chapters in the GCC countries merged to form the PCF, which has since been recognized as the official diaspora organization of the PDP. Our members consist of expatriate PDP activists and service-minded citizens who are deeply committed to the vision and leadership of Chairman Abdul Nasser Madani. Together, we strive to make a meaningful impact on the lives of our community members, advocating for their rights and welfare.`}
        />
        <link href="https://fonts.googleapis.com/css2?family=Chilanka:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Manjari:wght@400;700&display=swap" rel="stylesheet" />

        
        <meta name='keywords' content='pcf , people culture forum , peoplecultureforum.ae , pdp uae , uae pdp , pcf uae , uae pcf ,Peoples Democratic Party (PDP)' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  )
}

export default App
