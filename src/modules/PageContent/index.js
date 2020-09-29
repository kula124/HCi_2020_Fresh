import React from 'react'
import styles from './style.module.css'
import ImageParagraph from '../../components/ImageParagraph'
import First from '../../components/Images/First'
import Second from '../../components/Images/Second'

const firstText = `
  Villa Oliva Verde is positioned in Vinkuran, isolated from the tourist
  crowd for a pleasant and peaceful vacation. 
  It is ideal for nature lovers who enjoy peace and relaxation. 
  Villa has four bedrooms called Olive, Lavanda, 
  Sea and Antique room. Each bedroom has its own bathroom, TV and air conditioning. 
  Also, there are two more sofa beds and the living room with 
  a pull-out sofa bed so it can accommodate up to 12 people, 
  but comfortably it is ideally for 8-10 people. 
  There is a big and open kitchen with separate dining area. 
  On the spacious terrace close to the pool you can enjoy the warm summer evenings. 
  There is also a barbecue, so you can spend all day sunbathing, swimming and barbecuing, 
  and so have a perfect vacation.
`

const secondText = `
  Solated from the tourist crowds, yet just a few kilometers 
  from the tourist centers, lies the fishing village Vinkuran. 
  The private apartments above Vinkuran Bay and Soline Cove guarantee 
  a pleasant and peaceful vacation. Vinkuran has a sheltered beach along pine trees.
  It is ideal for nature lovers who enjoy peace and quiet. 
  There is a store, restaurant and café in the village.
  Vinkuran has always been famed for its stone. 
  In ancient times stone blocks were taken from the 
  quarry near Vinkuran - 
  Cave Romane for the construction of Pula's Arena. 
  Today, during the summer months an art colony for 
  sculptors is held in the quarry.`

const PageContent = () => <section className={styles.pageContent}>
    <ImageParagraph image={<First />} title="About us" text={firstText}/>
    <ImageParagraph image={<Second />} title="Vinkuran" text={secondText} reversed/>
</section> 

export default PageContent