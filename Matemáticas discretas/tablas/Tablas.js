//Metodo para cambiar la asociatividad
const propositionSelect = document.getElementById("select");
const proposition2 = document.querySelector(".prop2.op1.proposition");

//Agregar un listener para cambiar los parentesis
propositionSelect.addEventListener("change", () => {
  const LOCAL_PROP_OP = {
    op21: document.getElementById("operators21").value,
    op22: document.getElementById("operators22").value,
    op23: document.getElementById("operators23").value,
    op24: document.getElementById("operators24").value,
    op25: document.getElementById("operators25").value,
    op26: document.getElementById("operators26").value,
  };

  const isSelected = (value, operation) => {
    if (value == operation) {
      return "selected";
    }
    return "";
  };

  if (propositionSelect.checked) {
    //((p[]q)[]r)
    proposition2.innerHTML = `<label for="prop2">Segunda proposición</label>
    ( ( p
    <select name="operators" id="operators21">
      <option ${isSelected("and", LOCAL_PROP_OP.op21)} value="and">∧</option>
      <option ${isSelected("or", LOCAL_PROP_OP.op21)} value="or">∨</option>
      <option ${isSelected("implicates", LOCAL_PROP_OP.op21)} value="implicates">→</option>
      <option ${isSelected("biconditional", LOCAL_PROP_OP.op21)} value="biconditional">↔</option>
    </select>
    q )
    <select name="operators" id="operators22">
      <option ${isSelected("and", LOCAL_PROP_OP.op22)} value="and">∧</option>
      <option ${isSelected("or", LOCAL_PROP_OP.op22)} value="or">∨</option>
      <option ${isSelected("implicates", LOCAL_PROP_OP.op22)} value="implicates">→</option>
      <option ${isSelected("biconditional", LOCAL_PROP_OP.op22)} value="biconditional">↔</option>
    </select>
    r )
    <select name="operators" id="operators23">
      <option ${isSelected("and", LOCAL_PROP_OP.op23)} value="and">∧</option>
      <option ${isSelected("or", LOCAL_PROP_OP.op23)} value="or">∨</option>
      <option ${isSelected("implicates", LOCAL_PROP_OP.op23)} value="implicates">→</option>
      <option ${isSelected("biconditional", LOCAL_PROP_OP.op23)} value="biconditional">↔</option>
    </select>
    (
    <select name="operators" id="operators24">
      <option ${isSelected("nothing", LOCAL_PROP_OP.op24)} value="nothing"></option>
      <option ${isSelected("not", LOCAL_PROP_OP.op24)} value="not">¬</option>
    </select>
    p
    <select name="operators" id="operators25">
      <option ${isSelected("and", LOCAL_PROP_OP.op25)} value="and">∧</option>
      <option ${isSelected("or", LOCAL_PROP_OP.op25)} value="or">∨</option>
      <option ${isSelected("implicates", LOCAL_PROP_OP.op25)} value="implicates">→</option>
      <option ${isSelected("biconditional", LOCAL_PROP_OP.op25)} value="biconditional">↔</option>
    </select>
    <select name="operators" id="operators26">
      <option ${isSelected("nothing", LOCAL_PROP_OP.op26)} value="nothing"></option>
      <option ${isSelected("not", LOCAL_PROP_OP.op26)} value="not">¬</option>
    </select>
    s )`;
  } else{
    //(p[](q[]r))
    proposition2.innerHTML = `<label for="prop2">Segunda proposición</label>
    ( p
    <select name="operators" id="operators21">
      <option ${isSelected("and", LOCAL_PROP_OP.op21)} value="and">∧</option>
      <option ${isSelected("or", LOCAL_PROP_OP.op21)} value="or">∨</option>
      <option ${isSelected("implicates", LOCAL_PROP_OP.op21)} value="implicates">→</option>
      <option ${isSelected("biconditional", LOCAL_PROP_OP.op21)} value="biconditional">↔</option>
    </select>
    ( q
    <select name="operators" id="operators22">
      <option ${isSelected("and", LOCAL_PROP_OP.op22)} value="and">∧</option>
      <option ${isSelected("or", LOCAL_PROP_OP.op22)} value="or">∨</option>
      <option ${isSelected("implicates", LOCAL_PROP_OP.op22)} value="implicates">→</option>
      <option ${isSelected("biconditional", LOCAL_PROP_OP.op22)} value="biconditional">↔</option>
    </select>
    r ) )
    <select name="operators" id="operators23">
      <option ${isSelected("and", LOCAL_PROP_OP.op23)} value="and">∧</option>
      <option ${isSelected("or", LOCAL_PROP_OP.op23)} value="or">∨</option>
      <option ${isSelected("implicates", LOCAL_PROP_OP.op23)} value="implicates">→</option>
      <option ${isSelected("biconditional", LOCAL_PROP_OP.op23)} value="biconditional">↔</option>
    </select>
    (
    <select name="operators" id="operators24">
      <option ${isSelected("nothing", LOCAL_PROP_OP.op24)} value="nothing"></option>
      <option ${isSelected("not", LOCAL_PROP_OP.op24)} value="not">¬</option>
    </select>
    p
    <select name="operators" id="operators25">
      <option ${isSelected("and", LOCAL_PROP_OP.op25)} value="and">∧</option>
      <option ${isSelected("or", LOCAL_PROP_OP.op25)} value="or">∨</option>
      <option ${isSelected("implicates", LOCAL_PROP_OP.op25)} value="implicates">→</option>
      <option ${isSelected("biconditional", LOCAL_PROP_OP.op25)} value="biconditional">↔</option>
    </select>
    <select name="operators" id="operators26">
      <option ${isSelected("nothing", LOCAL_PROP_OP.op26)} value="nothing"></option>
      <option ${isSelected("not", LOCAL_PROP_OP.op26)} value="not">¬</option>
    </select>
    s )`;
  }
});

//Función para validar si dos arrays son iguales
function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

//Creamos un diccionario de las operaciones
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


//Creamos un diccionario para relacionar simbolos con operaciones del diccionario anterior
const OPERATORS_SYMBOLS = {
  nothing: "",
  and: "∧",
  or: "∨",
  not: "¬",
  implicates: "→",
  biconditional: "↔",
};

//construimos la parte estatica de cada tabla

const inputs_tab1 = {
  p: [true, true, true, true, false, false, false, false],
  q: [true, true, false, false, true, true, false, false],
  r: [true, false, true, false, true, false, true, false],
};

const inputs_tab2 = {
  p: [true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false],
  q: [true, true, true, true, false, false, false, false, true, true, true, true, false, false, false, false],
  r: [true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false],
  s: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
};

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  event.preventDefault();

  const LOCAL_PROP_OP = {
    op11: document.getElementById("operators11").value,
    op12: document.getElementById("operators12").value,
    op13: document.getElementById("operators13").value,
    op14: document.getElementById("operators14").value,
    op15: document.getElementById("operators15").value,

    op21: document.getElementById("operators21").value,
    op22: document.getElementById("operators22").value,
    op23: document.getElementById("operators23").value,
    op24: document.getElementById("operators24").value,
    op25: document.getElementById("operators25").value,
    op26: document.getElementById("operators26").value,
  };

  //operaciones de columnas independientes
  const get_col = (operation, arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      result.push(OPERATORS[LOCAL_PROP_OP[operation]](arr[i]));
    }

    return result;
  };

  //operaciones de columnas dependientes
  const get_col_2_var = (operation, arr1, arr2) => {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
      result.push(OPERATORS[LOCAL_PROP_OP[operation]](arr1[i], arr2[i]));
    }

    return result;
  };

  //Operaciones primera tabla de verdad

  const get_tab1 = () => {
    const col1 = get_col("op11", inputs_tab1["p"]);
    const col2 = get_col("op15", inputs_tab1["r"]);

    const col3 = get_col_2_var("op12", col1, inputs_tab1["q"]);

    const col4 = get_col_2_var("op14", inputs_tab1["p"], col2);

    const final = get_col_2_var("op13", col3, col4);

    const tabla = {
      p: inputs_tab1["p"],
      q: inputs_tab1["q"],
      r: inputs_tab1["r"],
      col1: col1,
      col2: col2,
      col3: col3,
      col4: col4,
      final: final,
    };

    return tabla;
  };

  // operaciones segunda tabla

  const get_tab2 = () => {
    const col1 = get_col("op24", inputs_tab2["p"]);
    const col2 = get_col("op26", inputs_tab2["s"]);

    let col3, col4;
    if (propositionSelect.checked) {
      col3 = get_col_2_var("op21", inputs_tab2["p"], inputs_tab2["q"]);
      col4 = get_col_2_var("op22", col3, inputs_tab2["r"]);
    } else  {
      col3 = get_col_2_var("op22", inputs_tab2["q"], inputs_tab2["r"]);
      col4 = get_col_2_var("op21", inputs_tab2["p"], col3);
    }

    const col5 = get_col_2_var("op25", col1, col2);

    const final = get_col_2_var("op23", col4, col5);

    const table = {
      p: inputs_tab2["p"],
      q: inputs_tab2["q"],
      r: inputs_tab2["r"],
      s: inputs_tab2["s"],
      col1: col1,
      col2: col2,
      col3: col3,
      col4: col4,
      col5: col5,
      final: final,
    };
    return table;
  };

  const tabla1 = get_tab1();
  const tabla2 = get_tab2();

  // console.log(tabla1);
  // console.log(tabla2);

            //creamos la tabla 1
            const table1 = document.createElement("table");

            //creamos los encabezados
            const header1 = document.createElement("tr");

            const header1Cells = [
                "p",
                "q",
                "r",
                "col1",
                "col2",
                `${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op11"]]}p ${
                OPERATORS_SYMBOLS[LOCAL_PROP_OP["op12"]]
                } q`,
                `p ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op14"]]} ${
                OPERATORS_SYMBOLS[LOCAL_PROP_OP["op15"]]
                }r`,
                `(${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op11"]]}p ${
                OPERATORS_SYMBOLS[LOCAL_PROP_OP["op12"]]
                } q) ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op13"]]} (p ${
                OPERATORS_SYMBOLS[LOCAL_PROP_OP["op14"]]
                } ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op15"]]}r)`,
            ];

            if (arrayEquals(tabla1.col2, inputs_tab1["r"])) {
                delete header1Cells[4];
            } else {
                header1Cells[4] = "¬r";
            }
            if (arrayEquals(tabla1.col1, inputs_tab1["p"])) {
                delete header1Cells[3];
            } else {
                header1Cells[3] = "¬p";
            }

            header1Cells.forEach((cell) => {
                const th = document.createElement("th");
                th.textContent = cell;
                header1.appendChild(th);
            });
            table1.appendChild(header1);

  //Crer cuerpo de tabla 1
            for (let i = 0; i < tabla1.p.length; i++) {
                const row = document.createElement("tr");
                const cells = [
                tabla1.p[i],
                tabla1.q[i],
                tabla1.r[i],
                tabla1.col1[i],
                tabla1.col2[i],
                tabla1.col3[i],
                tabla1.col4[i],
                tabla1.final[i],
                ];

                if (header1Cells[3] == undefined) {
                cells[3] = undefined;
                }
                if (header1Cells[4] == undefined) {
                cells[4] = undefined;
                }

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
                table1.appendChild(row);
            }

            

            //Crear tabla 2
            const table2 = document.createElement("table");

            //Encabezados tabla 2
            const header2 = document.createElement("tr");

            let header2Cells;

            if (propositionSelect.checked) {
                header2Cells = [
                "p",
                "q",
                "r",
                "s",
                "col1",
                "col2",
                `p ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op21"]]} q`,
                `(p ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op21"]]} q) ${
                    OPERATORS_SYMBOLS[LOCAL_PROP_OP["op22"]]
                } r`,
                `${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op24"]]} p ${
                    OPERATORS_SYMBOLS[LOCAL_PROP_OP["op25"]]
                } ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op26"]]} s`,
                `[(p ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op21"]]} q) ${
                    OPERATORS_SYMBOLS[LOCAL_PROP_OP["op22"]]
                } r] ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op23"]]} [${
                    OPERATORS_SYMBOLS[LOCAL_PROP_OP["op24"]]
                } p ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op25"]]} ${
                    OPERATORS_SYMBOLS[LOCAL_PROP_OP["op26"]]
                } s]`,
                ];
            } else {
                header2Cells = [
                "p",
                "q",
                "r",
                "s",
                "col1",
                "col2",
                `q ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op22"]]} r`,
                `p ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op21"]]} (q ${
                    OPERATORS_SYMBOLS[LOCAL_PROP_OP["op22"]]
                } r)`,
                `${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op24"]]} p ${
                    OPERATORS_SYMBOLS[LOCAL_PROP_OP["op25"]]
                } ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op26"]]} s`,
                `[(p ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op21"]]} (q ${
                    OPERATORS_SYMBOLS[LOCAL_PROP_OP["op22"]]
                } r)] ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op23"]]} [${
                    OPERATORS_SYMBOLS[LOCAL_PROP_OP["op24"]]
                } p ${OPERATORS_SYMBOLS[LOCAL_PROP_OP["op25"]]} ${
                    OPERATORS_SYMBOLS[LOCAL_PROP_OP["op26"]]
                } s]`,
                ];
            }

            if (arrayEquals(tabla2.col2, inputs_tab2["s"])) {
                delete header2Cells[5];
            } else {
                header2Cells[5] = "¬s";
            }
            if (arrayEquals(tabla2.col1, inputs_tab2["p"])) {
                delete header2Cells[4];
            } else {
                header2Cells[4] = "¬p";
            }

            header2Cells.forEach((cell) => {
                const th = document.createElement("th");
                th.textContent = cell;
                header2.appendChild(th);
            });
            table2.appendChild(header2);

            //Crear cuerpo de tabla 2
            for (let i = 0; i < tabla2.p.length; i++) {
                const row = document.createElement("tr");
                const cells = [
                tabla2.p[i],
                tabla2.q[i],
                tabla2.r[i],
                tabla2.s[i],
                tabla2.col1[i],
                tabla2.col2[i],
                tabla2.col3[i],
                tabla2.col4[i],
                tabla2.col5[i],
                tabla2.final[i],
                ];

                if (header2Cells[4] == undefined) {
                cells[4] = undefined;
                }
                if (header2Cells[5] == undefined) {
                cells[5] = undefined;
                }

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
                table2.appendChild(row);
            }

  //Mostrar tabla en HTML
  const tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = "";
  tableContainer.appendChild(table1);
  tableContainer.appendChild(table2);
});