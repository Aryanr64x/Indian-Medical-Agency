import Approach from "../components/Approach"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Head from 'next/head'
export default function Home() {
  return (
   <div>
     <Head>
        <title>
         Fit India Marketing | All In One Marketing Solutions for Indian Medical Practises
        </title>
        <meta
          name="description"
          content="If you have a medical practise , we will market it for you using the modern online technologies . "
          key="desc"
        />
           <meta property="og:title" content="Best Marketing Website" />
        <meta
          property="og:description"
          content="If you have a medical practise , we will market it for you using the modern online technologies "
        />
      </Head>
      <Hero />
      <Approach />
      <Contact />
   </div>
  )
}
