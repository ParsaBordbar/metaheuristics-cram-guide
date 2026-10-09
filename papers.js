/* Shared reading list for every page in the hub.
   Each topic maps to the papers that introduced or best explain it.
   Links prefer DOIs (stable); entries without a DOI fall back to `url`. */
window.PAPERS = {
  general: { name: "Overviews", papers: [
    { a: "Blum & Roli", y: 2003, t: "Metaheuristics in combinatorial optimization: Overview and conceptual comparison", v: "ACM Computing Surveys 35(3)", doi: "10.1145/937503.937505", why: "The clearest map of how every method in this course relates." },
    { a: "Wolpert & Macready", y: 1997, t: "No free lunch theorems for optimization", v: "IEEE Trans. Evolutionary Computation 1(1)", doi: "10.1109/4235.585893", why: "Why no metaheuristic beats all others on every problem." },
    { a: "Talbi", y: 2009, t: "Metaheuristics: From Design to Implementation", v: "Wiley (book)", doi: "10.1002/9780470496916", why: "Source of the S-metaheuristic / P-metaheuristic vocabulary." },
    { a: "Michalewicz & Fogel", y: 2004, t: "How to Solve It: Modern Heuristics", v: "Springer (book, 2nd ed.)", doi: "10.1007/978-3-662-07807-5", why: "Origin of the SAT, TSP and tabu-penalty examples in the lectures." },
  ]},
  complexity: { name: "Problem complexity", papers: [
    { a: "Cook", y: 1971, t: "The complexity of theorem-proving procedures", v: "Proc. STOC '71", doi: "10.1145/800157.805047", why: "Proves SAT is NP-complete (Cook's theorem)." },
    { a: "Karp", y: 1972, t: "Reducibility among combinatorial problems", v: "Complexity of Computer Computations", doi: "10.1007/978-1-4684-2001-2_9", why: "The 21 classic NP-complete problems, via reductions." },
  ]},
  exact: { name: "Exact methods", papers: [
    { a: "Bellman", y: 1954, t: "The theory of dynamic programming", v: "Bulletin of the AMS 60(6)", doi: "10.1090/S0002-9904-1954-09848-8", why: "Optimal substructure and the principle of optimality." },
    { a: "Land & Doig", y: 1960, t: "An automatic method of solving discrete programming problems", v: "Econometrica 28(3)", doi: "10.2307/1910129", why: "The original branch-and-bound." },
  ]},
  local: { name: "Local search", papers: [
    { a: "Croes", y: 1958, t: "A method for solving traveling-salesman problems", v: "Operations Research 6(6)", doi: "10.1287/opre.6.6.791", why: "Introduces the 2-opt move." },
    { a: "Lin & Kernighan", y: 1973, t: "An effective heuristic algorithm for the traveling-salesman problem", v: "Operations Research 21(2)", doi: "10.1287/opre.21.2.498", why: "Variable-depth k-opt; still the TSP local-search benchmark." },
  ]},
  random: { name: "Random search", papers: [
    { a: "Brooks", y: 1958, t: "A discussion of random methods for seeking maxima", v: "Operations Research 6(2)", doi: "10.1287/opre.6.2.244", why: "Pure random search, as cited in the lecture." },
    { a: "Solis & Wets", y: 1981, t: "Minimization by random search techniques", v: "Mathematics of Operations Research 6(1)", doi: "10.1287/moor.6.1.19", why: "Convergence-in-probability proofs for random search." },
    { a: "Motwani & Raghavan", y: 1995, t: "Randomized Algorithms", v: "Cambridge University Press (book)", doi: "10.1017/CBO9780511814075", why: "Monte Carlo vs Las Vegas, expected running time." },
  ]},
  sa: { name: "Simulated annealing", papers: [
    { a: "Metropolis et al.", y: 1953, t: "Equation of state calculations by fast computing machines", v: "Journal of Chemical Physics 21(6)", doi: "10.1063/1.1699114", why: "The Metropolis acceptance rule." },
    { a: "Kirkpatrick, Gelatt & Vecchi", y: 1983, t: "Optimization by simulated annealing", v: "Science 220(4598)", doi: "10.1126/science.220.4598.671", why: "Turns Metropolis into an optimizer and names SA." },
    { a: "Černý", y: 1985, t: "Thermodynamical approach to the traveling salesman problem", v: "J. Optimization Theory & Applications 45", doi: "10.1007/BF00940812", why: "Independent discovery of SA, applied to TSP." },
    { a: "Hajek", y: 1988, t: "Cooling schedules for optimal annealing", v: "Mathematics of Operations Research 13(2)", doi: "10.1287/moor.13.2.311", why: "When a logarithmic schedule guarantees the global optimum." },
  ]},
  grasp: { name: "GRASP", papers: [
    { a: "Feo & Resende", y: 1989, t: "A probabilistic heuristic for a computationally difficult set covering problem", v: "Operations Research Letters 8(2)", doi: "10.1016/0167-6377(89)90002-3", why: "First GRASP, on set covering." },
    { a: "Feo & Resende", y: 1995, t: "Greedy randomized adaptive search procedures", v: "Journal of Global Optimization 6", doi: "10.1007/BF01096763", why: "The standard GRASP reference: RCL, α, local search." },
    { a: "Prais & Ribeiro", y: 2000, t: "Reactive GRASP: An application to a matrix decomposition problem in TDMA traffic assignment", v: "INFORMS Journal on Computing 12(3)", doi: "10.1287/ijoc.12.3.164.12639", why: "Reactive GRASP — α adapts during the run." },
  ]},
  tabu: { name: "Tabu search", papers: [
    { a: "Glover", y: 1986, t: "Future paths for integer programming and links to artificial intelligence", v: "Computers & Operations Research 13(5)", doi: "10.1016/0305-0548(86)90048-1", why: "Coins the term tabu search (and metaheuristic)." },
    { a: "Glover", y: 1989, t: "Tabu Search — Part I", v: "ORSA Journal on Computing 1(3)", doi: "10.1287/ijoc.1.3.190", why: "Tabu list, aspiration, recency memory." },
    { a: "Glover", y: 1990, t: "Tabu Search — Part II", v: "ORSA Journal on Computing 2(1)", doi: "10.1287/ijoc.2.1.4", why: "Frequency memory, intensification, diversification." },
  ]},
  ea: { name: "Evolutionary algorithms", papers: [
    { a: "Holland", y: 1992, t: "Adaptation in Natural and Artificial Systems", v: "MIT Press (book, orig. 1975)", doi: "10.7551/mitpress/1090.001.0001", why: "The founding text of genetic algorithms." },
    { a: "Eiben & Smith", y: 2015, t: "Introduction to Evolutionary Computing", v: "Springer (book, 2nd ed.)", doi: "10.1007/978-3-662-44874-8", why: "The textbook behind the EA lectures and 8-queens example." },
    { a: "Goldberg & Deb", y: 1991, t: "A comparative analysis of selection schemes used in genetic algorithms", v: "Foundations of Genetic Algorithms", doi: "10.1016/B978-0-08-050684-5.50008-2", why: "Selection pressure of roulette, rank and tournament." },
  ]},
  es: { name: "Evolution strategies", papers: [
    { a: "Beyer & Schwefel", y: 2002, t: "Evolution strategies — A comprehensive introduction", v: "Natural Computing 1", doi: "10.1023/A:1015059928466", why: "(μ,λ) vs (μ+λ), 1/5 rule and self-adaptation in one place." },
    { a: "Hansen & Ostermeier", y: 2001, t: "Completely derandomized self-adaptation in evolution strategies", v: "Evolutionary Computation 9(2)", doi: "10.1162/106365601750190398", why: "CMA-ES, the modern ES workhorse." },
  ]},
  perf: { name: "Performance analysis", papers: [
    { a: "Barr et al.", y: 1995, t: "Designing and reporting on computational experiments with heuristic methods", v: "Journal of Heuristics 1", doi: "10.1007/BF02430363", why: "The checklist for fair experimental comparisons." },
    { a: "Derrac et al.", y: 2011, t: "A practical tutorial on the use of nonparametric statistical tests as a methodology for comparing evolutionary and swarm intelligence algorithms", v: "Swarm and Evolutionary Computation 1(1)", doi: "10.1016/j.swevo.2011.02.002", why: "Which statistical test to run, and when." },
    { a: "López-Ibáñez et al.", y: 2016, t: "The irace package: Iterated racing for automatic algorithm configuration", v: "Operations Research Perspectives 3", doi: "10.1016/j.orp.2016.09.002", why: "Off-line parameter tuning done properly." },
  ]},
  eadesign: { name: "EA design", papers: [
    { a: "Eiben, Hinterding & Michalewicz", y: 1999, t: "Parameter control in evolutionary algorithms", v: "IEEE Trans. Evolutionary Computation 3(2)", doi: "10.1109/4235.771166", why: "Tuning vs control; deterministic, adaptive, self-adaptive." },
    { a: "Goldberg & Deb", y: 1991, t: "A comparative analysis of selection schemes used in genetic algorithms", v: "Foundations of Genetic Algorithms", doi: "10.1016/B978-0-08-050684-5.50008-2", why: "Takeover time for each selection scheme." },
  ]},
  tsp: { name: "EAs for TSP & memetic", papers: [
    { a: "Larrañaga et al.", y: 1999, t: "Genetic algorithms for the travelling salesman problem: A review of representations and operators", v: "Artificial Intelligence Review 13", doi: "10.1023/A:1006529012972", why: "PMX, OX, CX and every TSP encoding, compared." },
    { a: "Neri & Cotta", y: 2012, t: "Memetic algorithms and memetic computing optimization: A literature review", v: "Swarm and Evolutionary Computation 2", doi: "10.1016/j.swevo.2011.11.003", why: "EA + local search hybrids, surveyed." },
  ]},
  constraints: { name: "Constraint handling", papers: [
    { a: "Michalewicz & Schoenauer", y: 1996, t: "Evolutionary algorithms for constrained parameter optimization problems", v: "Evolutionary Computation 4(1)", doi: "10.1162/evco.1996.4.1.1", why: "Penalty, repair and rejection, side by side." },
    { a: "Deb", y: 2000, t: "An efficient constraint handling method for genetic algorithms", v: "Computer Methods in Applied Mechanics & Engineering 186", doi: "10.1016/S0045-7825(99)00389-8", why: "Feasibility rules: feasible always beats infeasible." },
    { a: "Coello Coello", y: 2002, t: "Theoretical and numerical constraint-handling techniques used with evolutionary algorithms: A survey", v: "Computer Methods in Applied Mechanics & Engineering 191", doi: "10.1016/S0045-7825(01)00323-1", why: "Static, dynamic, annealing and adaptive penalties." },
  ]},
  aco: { name: "Ant colony optimization", papers: [
    { a: "Dorigo, Maniezzo & Colorni", y: 1996, t: "Ant system: Optimization by a colony of cooperating agents", v: "IEEE Trans. Systems, Man & Cybernetics B 26(1)", doi: "10.1109/3477.484436", why: "Ant System: pheromone update τ ← (1−ρ)τ + Δτ." },
    { a: "Dorigo & Gambardella", y: 1997, t: "Ant colony system: A cooperative learning approach to the traveling salesman problem", v: "IEEE Trans. Evolutionary Computation 1(1)", doi: "10.1109/4235.585892", why: "ACS: the q₀ pseudo-random-proportional rule." },
    { a: "Stützle & Hoos", y: 2000, t: "MAX–MIN Ant System", v: "Future Generation Computer Systems 16(8)", doi: "10.1016/S0167-739X(00)00043-1", why: "Bounded pheromone and best-ant-only updates." },
    { a: "Dorigo, Birattari & Stützle", y: 2006, t: "Ant colony optimization", v: "IEEE Computational Intelligence Magazine 1(4)", doi: "10.1109/MCI.2006.329691", why: "Short tutorial covering AS, ACS and MMAS." },
  ]},
  pso: { name: "Particle swarm optimization", papers: [
    { a: "Kennedy & Eberhart", y: 1995, t: "Particle swarm optimization", v: "Proc. IEEE ICNN '95", doi: "10.1109/ICNN.1995.488968", why: "The original PSO paper." },
    { a: "Shi & Eberhart", y: 1998, t: "A modified particle swarm optimizer", v: "Proc. IEEE ICEC '98", doi: "10.1109/ICEC.1998.699146", why: "Introduces the inertia weight w." },
    { a: "Clerc & Kennedy", y: 2002, t: "The particle swarm — explosion, stability, and convergence in a multidimensional complex space", v: "IEEE Trans. Evolutionary Computation 6(1)", doi: "10.1109/4235.985692", why: "Constriction factor; why c₁ + c₂ ≈ 4." },
    { a: "Poli, Kennedy & Blackwell", y: 2007, t: "Particle swarm optimization: An overview", v: "Swarm Intelligence 1", doi: "10.1007/s11721-007-0002-0", why: "Topologies (star, ring) and variants." },
  ]},
  bee: { name: "Bee colony", papers: [
    { a: "Karaboga & Basturk", y: 2007, t: "A powerful and efficient algorithm for numerical function optimization: Artificial bee colony (ABC) algorithm", v: "Journal of Global Optimization 39", doi: "10.1007/s10898-007-9149-x", why: "Employed, onlooker and scout bees." },
    { a: "Karaboga & Akay", y: 2009, t: "A comparative study of Artificial Bee Colony algorithm", v: "Applied Mathematics and Computation 214(1)", doi: "10.1016/j.amc.2009.03.090", why: "ABC benchmarked against GA, PSO and DE." },
  ]},
  eda: { name: "Estimation of distribution", papers: [
    { a: "Mühlenbein & Paaß", y: 1996, t: "From recombination of genes to the estimation of distributions I. Binary parameters", v: "PPSN IV", doi: "10.1007/3-540-61723-X_982", why: "UMDA, the first EDA." },
    { a: "Harik, Lobo & Goldberg", y: 1999, t: "The compact genetic algorithm", v: "IEEE Trans. Evolutionary Computation 3(4)", doi: "10.1109/4235.797971", why: "cGA: a population replaced by a probability vector." },
    { a: "Hauschild & Pelikan", y: 2011, t: "An introduction and survey of estimation of distribution algorithms", v: "Swarm and Evolutionary Computation 1(3)", doi: "10.1016/j.swevo.2011.08.003", why: "From univariate models up to Bayesian networks." },
  ]},
  vns: { name: "VNS, GLS & LNS", papers: [
    { a: "Mladenović & Hansen", y: 1997, t: "Variable neighborhood search", v: "Computers & Operations Research 24(11)", doi: "10.1016/S0305-0548(97)00031-2", why: "Shaking + local search over nested neighborhoods." },
    { a: "Voudouris & Tsang", y: 1999, t: "Guided local search and its application to the traveling salesman problem", v: "European Journal of Operational Research 113(2)", doi: "10.1016/S0377-2217(98)00099-X", why: "Feature penalties and utility in GLS." },
    { a: "Shaw", y: 1998, t: "Using constraint programming and local search methods to solve vehicle routing problems", v: "CP '98", doi: "10.1007/3-540-49481-2_30", why: "Large neighborhood search: destroy and repair." },
    { a: "Ropke & Pisinger", y: 2006, t: "An adaptive large neighborhood search heuristic for the pickup and delivery problem with time windows", v: "Transportation Science 40(4)", doi: "10.1287/trsc.1050.0135", why: "ALNS — and a close cousin of the taxi-sharing exam problem." },
  ]},
  de: { name: "Differential evolution", papers: [
    { a: "Storn & Price", y: 1997, t: "Differential evolution — A simple and efficient heuristic for global optimization over continuous spaces", v: "Journal of Global Optimization 11", doi: "10.1023/A:1008202821328", why: "DE/rand/1/bin and the F, CR parameters." },
    { a: "Vesterstrøm & Thomsen", y: 2004, t: "A comparative study of differential evolution, particle swarm optimization, and evolutionary algorithms on numerical benchmark problems", v: "Proc. IEEE CEC 2004", doi: "10.1109/CEC.2004.1331139", why: "Head-to-head DE vs PSO vs EA." },
  ]},
  moo: { name: "Multi-objective", papers: [
    { a: "Deb et al.", y: 2002, t: "A fast and elitist multiobjective genetic algorithm: NSGA-II", v: "IEEE Trans. Evolutionary Computation 6(2)", doi: "10.1109/4235.996017", why: "Non-dominated sorting and crowding distance." },
    { a: "Coello Coello, Pulido & Lechuga", y: 2004, t: "Handling multiple objectives with particle swarm optimization", v: "IEEE Trans. Evolutionary Computation 8(3)", doi: "10.1109/TEVC.2004.826067", why: "MOPSO: external archive as the source of gbest." },
    { a: "Zitzler et al.", y: 2003, t: "Performance assessment of multiobjective optimizers: An analysis and review", v: "IEEE Trans. Evolutionary Computation 7(2)", doi: "10.1109/TEVC.2003.810758", why: "How to compare two Pareto fronts (hypervolume, indicators)." },
  ]},
};

window.paperHref = p => p.doi ? "https://doi.org/" + p.doi : p.url;

/* Render one topic (or several) as a reading list. Used by every page. */
window.renderPapers = function (keys, opts) {
  opts = opts || {};
  const seen = new Set();
  const items = [];
  // a key is either a topic name or a single DOI
  const byDoi = d => Object.values(window.PAPERS).flatMap(t => t.papers).filter(p => p.doi === d).slice(0, 1);
  [].concat(keys).forEach(k => (window.PAPERS[k] ? window.PAPERS[k].papers : byDoi(k)).forEach(p => {
    const id = p.doi || p.url;
    if (!seen.has(id)) { seen.add(id); items.push(p); }
  }));
  if (!items.length) return "";
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<ol class="papers${opts.compact ? " compact" : ""}">` + items.map(p =>
    `<li><a href="${paperHref(p)}" target="_blank" rel="noopener">
      <span class="p-t">${esc(p.t)}</span>
      <span class="p-a">${esc(p.a)}, ${p.y} — <i>${esc(p.v)}</i></span>
      ${opts.compact ? "" : `<span class="p-w">${esc(p.why)}</span>`}
    </a></li>`).join("") + `</ol>`;
};
