import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, id, slug, pageIndex, pageSize, sortBy }) => {
  const { data, loading, error } = useQuery(query, {
    variables: {
      id: id,
      slug: slug,
      pageIndex: pageIndex,
      pageSize: pageSize,
      sortBy: sortBy
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
