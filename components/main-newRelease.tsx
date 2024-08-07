import { API_URL } from "../data/API";

async function getMovieNewRelease() {
  const res = await fetch(`${API_URL}`);
  return res.json();
}

export default async function NewReleaseSection() {
  const data = await getMovieNewRelease();
  const dateSortArr = data.sort(
    (a: any, b: any): any => new Date(b.release_date) - new Date(a.release_date)
  );

  return <div>{}</div>;
}
