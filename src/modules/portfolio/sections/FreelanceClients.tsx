import Heading from "../../../components/Heading"
import SecurePasswordsLogo from "../../../assets/securepasswords.png";
import BottomStreetLogo from "../../../assets/bottomstreet.png";
import SerVLogo from "../../../assets/serv.png";

const FreelanceClients = () => {
  const clients: any = [
    {name: "Secure Passwords", logo: SecurePasswordsLogo},
    {name: "Bottom Street", logo: BottomStreetLogo},
    {name: "SerV", logo: SerVLogo},
  ]

  return (
    <div className="mt-[10vh] mb-[20vh]">
      <Heading thin="Freelance" thick='Clients' />
      <p className="text-2xl font-thin">I have worked with multiple clients.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {clients.map((client: any, index: number) => (
          <div key={index} className="p-5 rounded-lg flex flex-col items-center">
            <div className="bg-[#121212] w-[120px] h-[120px] flex items-center overflow-hidden justify-center mb-4 rounded-full">
              <img
                src={client.logo || "https://via.placeholder.com/150"}
                alt={`${client.name} logo`}
              />
            </div>
            <span className="text-xl font-thin">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FreelanceClients