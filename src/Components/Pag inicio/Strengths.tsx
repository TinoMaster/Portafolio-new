import { strengthsData } from '../../data/strengths'
import { Strength_Card } from '../Strength_Card'

const Strengths = () => {
   return (
      <section className="section">
         <div className="container">
            <div className="flex flex-wrap justify-center gap-6">
               {strengthsData.map((str, i) => (
                  <Strength_Card
                     key={str.translate}
                     translate={str.translate}
                     Icon={str.icon}
                     color={str.color}
                     index={i}
                  />
               ))}
            </div>
         </div>
      </section>
   )
}

export default Strengths
