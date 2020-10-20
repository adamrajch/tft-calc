import { Grid } from "semantic-ui-react";
const Math = () => {
  return (
    <Grid container>
      {/* <div className="math-wrapper"> */}
      <div className="mathWrap">
        <p>
          First, let’s understand how we calculate the probability of getting a
          certain number of copies in one shop:
        </p>

        <p className="equation">
          P<sub>cell</sub>=(total <sub> champ </sub> / total
          <sub>cost pool </sub>) * P<sub>cost</sub>
        </p>
      </div>

      <div className="mathWrap">
        <p>
          The probability to be offered a champion in one individual cell
          depends on the number of copies of that champion that are available,
          the number of copies of same-cost champions that are available, and
          the odds of getting a champion of that cost which depends on the
          level.
        </p>
        <p>Equation (2)</p>
        <p className="equation">
          P<sub>shop</sub> (X = x ) = P<sub>cell</sub>
          <sup>x </sup>(1-P<sub>cell </sub>)<sup>5-x</sup>(<sub>5</sub>C
          <sub>x</sub> )
        </p>
      </div>

      <div className="mathWrap">
        <p>
          We use the above binomial probability equation to determine the
          probability of being offered exactly <i>x</i> copies in a given shop.
        </p>
      </div>

      <div className="mathWrap">
        <p>
          We are assuming that each cell is calculated in parallel and each has
          the same probability to get a champion. This makes the calculation
          easier while only having a small effect on the result if the
          assumption turned out to be false.
        </p>
      </div>

      <div className="mathWrap">
        <p>
          When calculating the probability to be offered a champion in a certain
          number of rolls, <i>r</i>, it is less useful to search for an exact
          number of copies and much simpler and more realistic to search for at
          least a certain number of copies. After all, when needing one last
          copy to complete your team composition, a few extra copies doesn’t
          hurt and should be taken into account.
        </p>
        <p>Equation (3)</p>
        <p className="equation">
          P<sub>rolls</sub> ( X{">="}1, R = r) = 1 - P<sub>rolls</sub>(X {"<"}{" "}
          1, R = r) = 1 - P <sub>rolls</sub> (X = 0, R = r)
        </p>
        <p>Equation (4)</p>
        <p className="equation">
          P<sub>rolls</sub> ( X{">="}2, R = r) = 1 - P<sub>rolls</sub>(X {"<"}{" "}
          2, R = r) = 1 - P <sub>rolls</sub> (X = 0, R = r) - P<sub>rolls</sub>{" "}
          ( X = 1 , R = r)
        </p>
        <p>Equation (5)</p>
        <p className="equation">
          P<sub>rolls</sub> ( X{">="}3, R = r) = 1 - P<sub>rolls</sub>(X {"<"}{" "}
          3, R = r) = 1 - P <sub>rolls</sub> (X = 0, R = r) - P<sub>rolls</sub>{" "}
          ( X = 1 , R = r) - P <sub>rolls</sub> (X = 2 , R = 2)
        </p>
      </div>

      <div className="mathWrap">
        <p>
          To calculate P<sub>rolls</sub> we once again use a binomial
          distribution and P<sub>shop</sub> from equation (2):
        </p>
        <p>Equation (6)</p>
        <p className="equation">
          P <sub>rolls</sub> ( X = 0, R = r ) = P<sub>shop</sub> (X = 0)
          <sup>r</sup>
        </p>
        <p>Equation (7)</p>
        <p className="equation">
          P <sub>rolls</sub> ( X = 1, R = r ) = P<sub>shop</sub> (X = 1)
          <sup>1</sup> (1 - P<sub>shop</sub> ( X = 0))<sup>r - 1</sup> (
          <sub>r</sub> C<sub>1</sub>)
        </p>
        <p>Equation (8)</p>
        <p className="equation">
          P <sub>rolls</sub> ( X = 2, R = r ) = P<sub>shop</sub> ( X = 2 )
          <sup>1</sup> (1 - P<sub>shop</sub> ( X = 0))<sup>r - 1</sup> (
          <sub>r</sub> C<sub>1</sub>) + P<sub>shop</sub> ( X = 1 )<sup>2</sup> (
          X = 1 )<sup>2</sup> (1 - P<sub>shop</sub> ( X = 0))
          <sup>r - 2</sup> (<sub>r</sub> C<sub>2</sub>)
        </p>
      </div>

      <div className="mathWrap">
        <p>
          Equation (6) contains an extra term because there are two different
          ways to be offered exactly two champions: having two in one roll and
          zero in the rest, and having one in two different shops and zero in
          the rest.
        </p>
      </div>

      <div className="mathWrap">
        <p>
          By combining equations equations (2) through (8) we arrive to our
          answer.
        </p>
      </div>
      {/* </div> */}
      <style jsx>{`
        .math-wrapper {
          border: 3px solid white;
          width: 50%;
          margin: 0 1em 0 1em;
          color: white;
          // padding-bottom: 2em;
        }
        .mathWrap {
          font-size: 18px;
          padding: 1em 1em;

          width: 100%;
          height: 100%;
          color: white;
        }
        sub {
          font-style: italic;
        }
        .equation {
          font-style: italic;
          text-align: center;
        }
      `}</style>
    </Grid>
  );
};
export default Math;
