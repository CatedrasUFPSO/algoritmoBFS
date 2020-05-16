/**
 * Función que inicializa la ejecución. Se autoejecuta al momento que el script es cargado en el HTML
 */
(() => {
  // prettier-ignore
  const STAGE_MATRIX = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0],
    [0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0],
    [0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0],
    [0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1],
    [1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1],
    [1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1],
    [1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1],
    [1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1],
    [1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1],
    [1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1],
    [1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1],
    [1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1],
    [1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1],
    [1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1],
    [1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1]
  ];

  /*const STAGE_MATRIX = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ];*/

  const TOTAL_ROWS = STAGE_MATRIX.length;
  const TOTAL_COLS = STAGE_MATRIX[0].length;

  const CANVAS = document.getElementById('stage');
  const CTX = CANVAS.getContext('2d');
  const SQUARE_SIZE = CANVAS.width / TOTAL_COLS;

  drawGrid(CTX, SQUARE_SIZE, STAGE_MATRIX, TOTAL_ROWS, TOTAL_COLS);

  BFS(STAGE_MATRIX, CTX, SQUARE_SIZE, TOTAL_ROWS, TOTAL_COLS);
})();

/**
 * Función BFS - Evalúa y define la ruta más corta entre dos puntos (si existe)
 * @param {*} stageMatrix - Matriz con valores de ceros(camino) y unos(obstáculos)
 * @param {*} ctx - Contexto del objeto canvas
 * @param {*} squareSize - Tamaño de cada casilla del escenario
 * @param {*} totalRows - Cantidad de filas del escenario
 * @param {*} totalCols - Cantidad de columnas del escenario
 */
function BFS(stageMatrix, ctx, squareSize, totalRows, totalCols) {
  // Creo la matriz de adyacencia para los elementos del escenario
  const ADJACENCY_MATRIX = makeAdjacencyMatrix(
    stageMatrix,
    totalRows,
    totalCols
  );

  // Índice de los nodos inicial y final
  const startNode = 0;
  let endNode = 866;

  // La cola de nodos a visitar
  let queue = [];
  // Nodos visitados
  let visited = [];
  // Nodo actual
  let current;
  // Listado de padres
  let parents = [];

  // Se añade el nodo inicial a la cola de nodos a visitar
  queue.push(startNode);
  // El padre del nodo inicial es nulo
  parents[startNode] = null;
  // Se marca como ya visitado el nodo inicial
  visited[startNode] = true;

  // Nodo temporal usado para crear la lista de nodos del camino encontrado
  let tempNode = endNode;

  while (queue.length > 0) {
    // Obtiene el nodo actual y se quita de la cola a visitar
    current = queue.shift();

    // Si el nodo actual es el final, generar el resultado
    if (current == tempNode) {
      // Array para almacenar el camino encontrado
      var nodesPath = [tempNode];

      while (parents[tempNode] !== null) {
        tempNode = parents[tempNode];
        nodesPath.push(tempNode);
      }

      // Array con las casillas a dibujar en pantalla
      let pathArray = [];

      for (let i = 0; i < nodesPath.length; i++) {
        let square = {
          x: parseInt(nodesPath[i] / totalCols),
          y: nodesPath[i] % totalCols,
        };

        pathArray.push(square);
      }

      drawPath(ctx, squareSize, pathArray);
      console.log('Camino encontrado!!!' + nodesPath.length);
      break;
    }

    // Visitar los nodos conectados al actual
    for (let i = 0; i < ADJACENCY_MATRIX.length; i++) {
      if (i != current && ADJACENCY_MATRIX[current][i] && !visited[i]) {
        parents[i] = current;
        visited[i] = true;
        // Añadir el nodo a la cola a visitar
        queue.push(i);
      }
    }
  }
}

/**
 * Función makeAdjacencyMatrix - Genera una matriz de adyacencia (conexión de cada nodo con sus vecinos)
 * @param {*} stageMatrix - Matriz con valores de ceros(camino) y unos(obstáculos)
 * @param {*} totalRows - Cantidad de filas a calcular
 * @param {*} totalCols - Cantidad de columnas a calcular
 */
function makeAdjacencyMatrix(stageMatrix, totalRows, totalCols) {
  let adjacencyMatrix = [];

  for (let i = 0; i < totalRows; i++) {
    for (let j = 0; j < totalCols; j++) {
      let rowArray = nodeAdjacency(i, j, stageMatrix, totalRows, totalCols);

      adjacencyMatrix.push(rowArray);
    }
  }

  return adjacencyMatrix;
}

/**
 * Función nodeAdjacency - Calcula la conexión del nodo recibido con sus vecinos
 * @param {*} i - Índice de la fila donde se encuentra el nodo a evaluar
 * @param {*} j - Índice de la columna donde se encuentra el nodo a evaluar
 * @param {*} stageMatrix - Matriz con valores de ceros(camino) y unos(obstáculos)
 * @param {*} totalRows - Cantidad de filas del escenario
 * @param {*} totalCols - Cantidad de columnas del escenario
 */
function nodeAdjacency(i, j, stageMatrix, totalRows, totalCols) {
  // Se genera la fila donde se almacena la adyacencia del nodo recibido
  let nodeAdjacency = new Array(totalRows * totalCols);
  // Se llena inicialmente con ceros (no conectado)
  nodeAdjacency.fill(0);

  // Adyacencia arriba, no debe estar en el límite superior del canvas y que el nodo evaluado y el de arriba sean caminos del stageMatrix
  if (i - 1 >= 0 && stageMatrix[i - 1][j] == 0 && stageMatrix[i][j] == 0) {
    nodeAdjacency[(i - 1) * totalCols + j] = 1;
  }

  // Adyacencia derecha, no debe estar en el límite derecho del canvas y que el nodo evaluado y de su derecha sean caminos del stageMatrix
  if (
    j < totalCols - 1 &&
    stageMatrix[i][j + 1] == 0 &&
    stageMatrix[i][j] == 0
  ) {
    nodeAdjacency[i * totalCols + j + 1] = 1;
  }

  // Adyacencia abajo, no debe estar en el límite inferior del canvas y que el nodo evaluado y el de abajo sean caminos del stageMatrix
  if (
    i < totalRows - 1 &&
    stageMatrix[i + 1][j] == 0 &&
    stageMatrix[i][j] == 0
  ) {
    nodeAdjacency[(i + 1) * totalCols + j] = 1;
  }

  // Adyacencia izquierda, no debe estar en el límite izquierdo del canvas y que el nodo evaluado y de su izquierda sean caminos del stageMatrix
  if (j - 1 >= 0 && stageMatrix[i][j - 1] == 0 && stageMatrix[i][j] == 0) {
    nodeAdjacency[i * totalCols + j - 1] = 1;
  }

  // console.log('Van: ' + (i * totalCols + j));

  return nodeAdjacency;
}

/**
 * Función drawPath - Dibuja en el canvas el camino encontrado
 * @param {*} ctx - Contexto del objeto canvas
 * @param {*} squareSize - Tamaño de cada casilla del escenario
 * @param {*} pathArray - Array con las casillas visitadas para llegar del punto inicial al final
 */
function drawPath(ctx, squareSize, pathArray) {
  let posX, posY;
  const COLOR = '#668000';

  for (let i = 0; i < pathArray.length; i++) {
    posX = pathArray[i].y * squareSize;
    posY = pathArray[i].x * squareSize;

    drawSquare(ctx, squareSize, posX, posY, COLOR);
  }
}

/**
 * Función drawGrid - Dibuja la grilla del escenario dentro del objeto canvas
 * @param {*} ctx - Contexto del objeto canvas
 * @param {*} squareSize - Tamaño de cada casilla del escenario
 * @param {*} stageMatrix - Matriz con valores de ceros(camino) y unos(obstáculos) para dibujar la grilla(escenario)
 * @param {*} totalRows - Cantidad de filas a dibujar
 * @param {*} totalCols - Cantidad de columnas a dibujar
 */
function drawGrid(ctx, squareSize, stageMatrix, totalRows, totalCols) {
  let color, posX, posY;

  for (let i = 0; i < totalRows; i++) {
    for (let j = 0; j < totalCols; j++) {
      // Determinar el color de la casilla dependiendo del tipo de casilla
      color = stageMatrix[i][j] == 0 ? '#999' : '#333';
      posX = j * squareSize;
      posY = i * squareSize;

      drawSquare(ctx, squareSize, posX, posY, color);
    }
  }
}

/**
 * Función drawSquare - Dibuja una casilla en el canvas con el color,y posiciones recibidas
 * @param {*} ctx - Contexto del objeto canvas
 * @param {*} squareSize - Tamaño de cada casilla del escenario
 * @param {*} posX - Posición que tomará la casilla en el eje X, relativa al canvas
 * @param {*} posY - Posición que tomará la casilla en el eje Y, relativa al canvas
 * @param {*} color - Color (hexadecimal) que tomará la casilla
 */
function drawSquare(ctx, squareSize, posX, posY, color) {
  // Dibujar la casilla en el canvas
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(posX, posY, squareSize, squareSize);

  // Dibujar un borde blanco sobre la casilla
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1;
  ctx.strokeRect(posX, posY, squareSize, squareSize);
}
