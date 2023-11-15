import PropTypes from "prop-types";
import RepoItems from "./RepoItems";

function RepoList({ repos }) {
  return (
    <div className=" rounded-lg shadow-lg card bg-base-100">
      <h2 className="text-3xl my-4 font-bold card-title">
        Latest Respositiories
      </h2>
      {repos.map((repo) => (
        <RepoItems key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
RepoList.propType = {
  repos: PropTypes.array.isRequired,
};
export default RepoList;
