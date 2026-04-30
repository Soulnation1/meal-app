import { useUser } from "../context/UserContext";


const Culture = () => {
      const { user, setActiveCulture } = useUser();
      const cultures = user?.cultures || ["Yoruba", "Igbo"];
    
  return (
    <div className="">
          <label className="text-md font-bold mr-2 text-[#061a00]">Mode</label>

          <select
            value={user.activeCulture}
            onChange={(e) => setActiveCulture(e.target.value)}
            className=" mt-1 p-1 rounded-md border border-[#061a00] bg-white text-[#061a00]"
          >
            {cultures.map((culture) => (
  <option key={culture} value={culture} className="hover:translate-y-1 transition-all duration-300">
    {culture}
  </option>
))}

            <option value="All">All</option>
          </select>
        </div>
  )
}

export default Culture