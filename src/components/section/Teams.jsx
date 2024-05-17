import { TeamMemberCard } from "./TeamMemberCard";

export const Teams = () => {
  const teams = [
    { name: "Samuel Harrison", role: "Senior Partner", img: "team_1.jpeg" },
    {
      name: "Elizabeth Turner",
      role: "Associate Director",
      img: "team_2.jpeg",
    },
    { name: "Jonathan Blake", role: "Associate Director", img: "team_3.jpeg" },
    { name: "Victoria Bennett", role: "Senior Partner", img: "team_4.jpeg" },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-12">
        {teams.map((item, index) => {
          <TeamMemberCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};
