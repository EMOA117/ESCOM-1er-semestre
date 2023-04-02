function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

const OPERATORS = {
  nothing: function(p) {
    return p;
  },
  and: function(p, q) {
    return p && q;
  },
  or: function(p, q) {
    return p || q;
  },
  not: function(p) {
    return !p;
  },
  implicates: function(p, q) {
    return !p || q;
  },
  biconditional: function(p, q) {
    return p === q;
  }
};

const Tauto = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== true) {
      return false;
    }
  }
  return true;
};

const OPERATORS_SYMBOLS = {
  nothing: "",
  and: "∧",
  or: "∨",
  not: "¬",
  implicates: "→",
  biconditional: "↔",
};

const calculatePrimitives = (n) => {
  let result = {};
  for (let i = 0; i < n; i++) {
    let varName = String.fromCharCode(112 + i); // "p" + i
    let values = [];
    for (let j = 0; j < Math.pow(2, n); j++) {
      values.push(Boolean(j & (1 << (n - i - 1))));
    }
    result[varName] = values.reverse();
  }
  return result;
};

const inputs_tab = calculatePrimitives(5);

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  event.preventDefault();

  const PROP_SELECTION = {
    prop1: document.getElementById("P1").checked,
    prop2: document.getElementById("P2").checked,
    prop3: document.getElementById("P3").checked,
    prop4: document.getElementById("P4").checked,
  };

  let primitives;
  if (PROP_SELECTION.prop4) {
    primitives = calculatePrimitives(5);
  } else if (PROP_SELECTION.prop3) {
    primitives = calculatePrimitives(4);
  } else {
    primitives = calculatePrimitives(3);
  }

  const LOCAL_PROP_OP = {
    op11: document.getElementById("operators11").value,
    op12: document.getElementById("operators12").value,
    op13: document.getElementById("operators13").value,

    op21: document.getElementById("operators21").value,
    op22: document.getElementById("operators22").value,
    op23: document.getElementById("operators23").value,

    op31: document.getElementById("operators31").value,
    op32: document.getElementById("operators32").value,
    op33: document.getElementById("operators33").value,

    op41: document.getElementById("operators41").value,
    op42: document.getElementById("operators42").value,
    op43: document.getElementById("operators43").value,

    op51: document.getElementById("operators51").value,
    op52: document.getElementById("operators52").value,
    op53: document.getElementById("operators53").value,
    op54: document.getElementById("operators54").value,
    op55: document.getElementById("operators55").value,
    and: "and",
    implicates: "implicates",
    not: "not",
  };

  const get_col = (operation, arr) => {
    const result = [];
  
    if (arr == undefined) {
      return undefined;
    } 

    for (let i = 0; i < arr.length; i++) {
      result.push(OPERATORS[LOCAL_PROP_OP[operation]](arr[i]));
    }

    return result;
  };

  const get_col_2_var = (operation, arr1, arr2) => {
    const result = [];

    if (arr1 == undefined && arr2 != undefined) {
      for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
      }
      return result;
    } else if (arr2 == undefined && arr1 != undefined) {
      for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
      }
      return result;
    } else if (arr1 == undefined && arr2 == undefined) {
      return undefined;
    }

    for (let i = 0; i < arr1.length; i++) {
      result.push(OPERATORS[LOCAL_PROP_OP[operation]](arr1[i], arr2[i]));
    }

    return result;
  };

  const get_tab = () => {

    const Nop1 = get_col("op11", primitives.p);
    const Nop2 = get_col("op51", primitives.p);

    const Noq1 = get_col("op13", primitives.q);
    const Noq2 = get_col("op21", primitives.q);
    const Noq3 = get_col("op53", primitives.q);

    const Nor1 = get_col("op23", primitives.r);
    const Nor2 = get_col("op31", primitives.r);
    const Nor3 = get_col("op55", primitives.r);

    const Nos1 = get_col("op33", primitives.s);
    const Nos2 = get_col("op41", primitives.s);

    const Not1 = get_col("op43", primitives.t);

    const NP = get_col("not", primitives.p);
    const NQ = get_col("not", primitives.q);
    const NR = get_col("not", primitives.r);
    const NS = get_col("not", primitives.s);
    const NT = get_col("not", primitives.t);
    

    let A;
    var Np,Nq,Nr,Ns,Nt;
    if (PROP_SELECTION.prop1) {
      A = get_col_2_var(
        "op12",
        get_col("op11", primitives.p),
        get_col("op13", primitives.q)
      );
    }

    let B;
    if (PROP_SELECTION.prop2) {
      B = get_col_2_var(
        "op22",
        get_col("op21", primitives.q),
        get_col("op23", primitives.r)
      );
    }

    let C;
    if (PROP_SELECTION.prop3) {
      C = get_col_2_var(
        "op32",
        get_col("op31", primitives.r),
        get_col("op33", primitives.s)
      );
    }

    let D;
    if (PROP_SELECTION.prop4) {
      D = get_col_2_var(
        "op42",
        get_col("op41", primitives.s),
        get_col("op43", primitives.t)
      );
    }

    const E = get_col_2_var(
      "and",
      get_col_2_var("and", A, B),
      get_col_2_var("and", C, D)
    );

    const F = get_col_2_var(
      "op54",
      get_col_2_var(
        "op52",
        get_col("op51", primitives.p),
        get_col("op53", primitives.q)
      ),
      get_col("op55", primitives.r)
    );


    const FINAL = get_col_2_var("implicates", E, F);

    const tabla = primitives;

    tabla.NP = NP;
    tabla.NQ = NQ;
    tabla.NR = NR;
    tabla.NS = NS;
    tabla.NT = NT;
    tabla.Nop1= Nop1;
    tabla.Nop2= Nop2;
    tabla.Noq1= Noq1;
    tabla.Noq2= Noq2;
    tabla.Noq3= Noq3;
    tabla.Nor1= Nor1;
    tabla.Nor2= Nor2;
    tabla.Nor3= Nor3;
    tabla.Nos1= Nos1;
    tabla.Nos2= Nos2;
    tabla.Not1= Not1;
    tabla.A = A;
    tabla.B = B;
    tabla.C = C;
    tabla.D = D;
    tabla.E = E;
    tabla.F = F;
    tabla.FINAL = FINAL;

    return tabla;
  };

  const tabla = get_tab();

  console.log(tabla);

  // create table for tabla2
  const table = document.createElement("table");

  // create table header
  const header = document.createElement("tr");

  const headerCells = ["p", "¬p", "q", "¬q", "r", "¬r"];

  if (tabla.D != undefined) {
    headerCells.push("s");
    headerCells.push("¬s");
    headerCells.push("t");
    headerCells.push("¬t");
  } else if (tabla.C != undefined) {
    headerCells.push("s");
    headerCells.push("¬s");
  }

  if (arrayEquals(tabla.Nop1, primitives.p)&&arrayEquals(tabla.Nop2, primitives.p)) {
    delete headerCells[1];
  }

  if (arrayEquals(tabla.Noq1, primitives.q) && arrayEquals(tabla.Noq2, primitives.q) && arrayEquals(tabla.Noq3, primitives.q)) {
    delete headerCells[3];
  }

  if (arrayEquals(tabla.Nor1, primitives.r) && arrayEquals(tabla.Nor2, primitives.r) && arrayEquals(tabla.Nor3, primitives.r)) {
    delete headerCells[5];
  }

  if (arrayEquals(tabla.Nos1, primitives.s)&&arrayEquals(tabla.Nos2, primitives.s)) {
    delete headerCells[7];
  }

  if (arrayEquals(tabla.Not1, primitives.t)) {
    delete headerCells[9];
  }
  //else if (arrayEquals(tabla.Nop1, tabla.p) || arrayEquals(tabla.Nop2, tabla.p)) {
  //   console.log("no es carnallll");
  //   headerCells.push("¬p");
  // }else if (tabla.Nq != undefined) {
  //   headerCells.push("¬q");
  // }else if (tabla.Nr != undefined) {
  //   headerCells.push("¬r");
  // }else if (tabla.Ns != undefined) {
  //   headerCells.push("¬s");
  // }else if (tabla.Nt != undefined) {
  //   headerCells.push("¬t");
  // }

  const header_which_select = [];
  if (PROP_SELECTION.prop1) {
    headerCells.push(
      `${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op11]} p ${
        OPERATORS_SYMBOLS[LOCAL_PROP_OP.op12]
      } ${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op13]} q `
    );
    header_which_select.push(`(${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op11]} p ${
      OPERATORS_SYMBOLS[LOCAL_PROP_OP.op12]
    } ${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op13]} q) `);
  }

  if (PROP_SELECTION.prop2) {
    headerCells.push(
      `${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op21]} q ${
        OPERATORS_SYMBOLS[LOCAL_PROP_OP.op22]
      } ${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op23]} r `
    );
    header_which_select.push(`(${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op21]} q ${
      OPERATORS_SYMBOLS[LOCAL_PROP_OP.op22]
    } ${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op23]} r) `);
  }

  if (PROP_SELECTION.prop3) {
    headerCells.push(
      `${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op31]} r ${
        OPERATORS_SYMBOLS[LOCAL_PROP_OP.op32]
      } ${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op33]} s `
    );
    header_which_select.push(`(${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op31]} r ${
      OPERATORS_SYMBOLS[LOCAL_PROP_OP.op32]
    } ${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op33]} s) `);
  }

  if (PROP_SELECTION.prop4) {
    headerCells.push(
      `${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op41]} s ${
        OPERATORS_SYMBOLS[LOCAL_PROP_OP.op42]
      } ${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op43]} t `
    );
    header_which_select.push(`(${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op41]} s ${
      OPERATORS_SYMBOLS[LOCAL_PROP_OP.op42]
    } ${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op43]} t) `);
  }

  headerCells.push(`${header_which_select.join(" ∧ ")} = P`);
  headerCells.push(
    `( ${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op51]} p ${
      OPERATORS_SYMBOLS[LOCAL_PROP_OP.op52]
    }${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op53]} q ) ${
      OPERATORS_SYMBOLS[LOCAL_PROP_OP.op54]
    } ${OPERATORS_SYMBOLS[LOCAL_PROP_OP.op55]} r = C`
  );

  headerCells.push("P → C");

  console.log(headerCells);

  headerCells.forEach((cell) => {
    const th = document.createElement("th");
    th.textContent = cell;
    header.appendChild(th);
  });
  table.appendChild(header);

  // create table body
  for (let i = 0; i < tabla.p.length; i++) {
    const row = document.createElement("tr");
    const cells = [tabla.p[i]];
    
    if (headerCells[1]=="¬p") {
      cells.push(tabla.NP[i]);
    }

    cells.push(tabla.q[i]);

    if (headerCells[3]=="¬q") {
      cells.push(tabla.NQ[i]);
    }

    cells.push(tabla.r[i]);

    if (headerCells[5]=="¬r") {
      cells.push(tabla.NR[i]);
    }

    if (tabla.D != undefined) {
      cells.push(tabla.s[i]);
      if (headerCells[7]=="¬s") {
        cells.push(tabla.NS[i]);
      }
      cells.push(tabla.t[i]);
      if (headerCells[9]=="¬t") {
        cells.push(tabla.NT[i]);
      }
    } else if (tabla.C != undefined) {
      cells.push(tabla.s[i]);
      if (headerCells[7]=="¬s") {
        cells.push(tabla.NS[i]);
      }
    }

    if (PROP_SELECTION.prop1) {
      cells.push(tabla.A[i]);
    }
    

    if (PROP_SELECTION.prop2) {
      cells.push(tabla.B[i]);
    }

    if (PROP_SELECTION.prop3) {
      cells.push(tabla.C[i]);
    }

    if (PROP_SELECTION.prop4) {
      cells.push(tabla.D[i]);
    }

    cells.push(tabla.E[i]);
    cells.push(tabla.F[i]);
    cells.push(tabla.FINAL[i]);

    cells.forEach((cell) => {
      if (cell != undefined) {
        if(cell == true){
          const td = document.createElement("td");
          td.textContent = "V";
          row.appendChild(td);
        }else{
          const td = document.createElement("td");
          td.textContent = "F";
          row.appendChild(td);
        }
      }
      });

    
    table.appendChild(row);
  }

  const verdad = Tauto(tabla.FINAL);

  //Agregar tablas a la pagina
  const tableContainer = document.getElementById("container");
  tableContainer.innerHTML = "";
  if (verdad == true) {
    tableContainer.innerHTML = `<div class="box">
    <h2>Argumento válido &#9989;</h2>
  </div>
  `;
  } else {
    tableContainer.innerHTML = `<div class="box">
    <h2>Argumento no válido &#10060;</h2>
  </div>
  `;
  }
  tableContainer.appendChild(table);
});