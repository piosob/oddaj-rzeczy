import Column from "./Column";
import classes from "./HomeThreeColumns.module.scss";
const HomeThreeColumns = () => {
  return (
    <div className={classes.HomeThreeColumns} id="HomeThreeColumns">
      <Column
        number="10"
        numberDescription="ODDANYCH WORKÓW"
        columnDescription="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
      />
      <Column
        number="5"
        numberDescription="WSPARTYCH ORGANIZACJI"
        columnDescription="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
      />
      <Column
        number="7"
        numberDescription="ZORGANIZOWANY ZBIÓREK"
        columnDescription="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
      />
    </div>
  );
};

export default HomeThreeColumns;
