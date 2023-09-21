const DynamicNewsPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1>This is the page of news : {params.id} </h1>
    </div>
  );
};

export default DynamicNewsPage;
