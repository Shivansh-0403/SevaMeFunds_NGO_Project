import org from '../../images/org_struc1.png'
import vision from '../../images/vision1.jpeg'
import mission from '../../images/mission2.jpeg'

function About() {
  return (
    <div className="flex-1 main">
      <div className="pt-24">
        <div className="text-center my-10">
          <h2 className="text-3xl mb-2 text-blue-700">Welcome to our Organisation</h2>
          <h3 className="text-xl">SevaMeFunds</h3>
        </div>

        <div>
          <div className="grid grid-cols-3 w-[75%] m-auto gap-24">
            <div className='text-center'>
              <img src={org} alt="Org Structure" width={100} height={100} className='rounded-full m-auto' />
              <div>
                <h3 className='text-2xl my-5'>Organisational Structure</h3>
                <div>SevaMeFunds believes in multiplying its efforts through collaboration & partnerships
                  that bring together government, non-government, and corporate in a collaborative process
                  for socio-economic development, improving agriculture, environment, health, and women empowerment.
                  SMF puts a lot of emphasis on upgrading the skills and capacities of its staff. For this purpose,
                  need-based training is regularly organized.
                </div>
              </div>
            </div>

            <div>
              <img src={vision} alt="SMF Vision" width={100} height={100} className='rounded-full m-auto' />
              <div className='text-center'>
                <h3 className='text-2xl my-5'>Vision</h3>
                <div>We aim to create a development revolution for the marginalized and socio-economically weaker sections of society. To be a nationally recognized platform built on the principles of trust and transparency promoting efficient and safe exchanges between people wanting to assist to good causes and non-profit organizations working towards those causes across the country
                </div>
              </div>
            </div>

            <div className='text-center'>
              <img src={mission} alt="SMF Mission" width={100} height={100} className='rounded-full m-auto' />
              <div>
                <h3 className='text-2xl my-5'>Mission</h3>
                <div>Our mission is the creation of such a society where nobody is deprived of the main current of development. We are determined for the establishment of that society in which everybody possesses ‘Human rights’ with dignity. To be a trusted guide to people who want to give their money to a noble cause and assisting them in choosing the best suited means to do so. To help NGOs and other non-profit organization acquire quick funds to further their work and function without any hurdles due to monetary issues. To contribute to the betterment of our society/\.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About