var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"using Markdown\nMarkdown.parse(\"\"\"\n$(read(\"../../README.md\",String))\n\"\"\")","category":"page"},{"location":"#Color-and-colormaps","page":"Home","title":"Color and colormaps","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"region_cmap","category":"page"},{"location":"#GridVisualizeTools.region_cmap","page":"Home","title":"GridVisualizeTools.region_cmap","text":"region_cmap(n)\n\n\nCreate customized distinguishable colormap for interior regions. For this we use a kind of pastel colors.\n\nregion_cmap(10)[1]\n\n# output\n\nRGB{Float64}(0.85,0.6,0.6)\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"using GridVisualizeTools # hide\nregion_cmap(5)","category":"page"},{"location":"","page":"Home","title":"Home","text":"bregion_cmap","category":"page"},{"location":"#GridVisualizeTools.bregion_cmap","page":"Home","title":"GridVisualizeTools.bregion_cmap","text":"bregion_cmap(n)\n\n\nCreate customized distinguishable colormap for boundary regions. These use fully saturated colors.\n\nbregion_cmap(10)[1]\n\n# output\n\nRGB{Float64}(1.0,0.0,0.0)\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"using GridVisualizeTools # hide\nbregion_cmap(5)","category":"page"},{"location":"","page":"Home","title":"Home","text":"rgbtuple","category":"page"},{"location":"#GridVisualizeTools.rgbtuple","page":"Home","title":"GridVisualizeTools.rgbtuple","text":"rgbtuple(c)\n\n\nCreate color tuple from  color description (e.g. string)\n\njulia> rgbtuple(:red)\n(1.0, 0.0, 0.0)\n\njulia> rgbtuple(\"red\")\n(1.0, 0.0, 0.0)\n\n\n\n\n\nrgbtuple(c)\n\n\nCreate color tuple from  RGB color.\n\njulia> rgbtuple(RGB(0.0,1,0))\n(0.0, 1.0, 0.0)\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"rgbtuple(:red)\n# output\n\n(1.0,1.0,1.0)","category":"page"},{"location":"","page":"Home","title":"Home","text":"ColorTypes.RGB","category":"page"},{"location":"#ColorTypes.RGB","page":"Home","title":"ColorTypes.RGB","text":"RGB(c)\n\n\nCreate RGB color from color name string.\n\njulia> Colors.RGB(\"red\") RGB{Float64}(1.0,0.0,0.0) ```\n\n\n\n\n\nRGB(c)\n\n\nCreate RGB color from color name symbol.\n\njulia> Colors.RGB(:red)\nRGB{Float64}(1.0,0.0,0.0)\n\n\n\n\n\nRGB(c)\n\n\nCreate RGB color from tuple\n\njulia> Colors.RGB((1.0,0,0))\nRGB{Float64}(1.0,0.0,0.0)\n\n\n\n\n\n","category":"type"},{"location":"","page":"Home","title":"Home","text":"using ColorTypes,GridVisualizeTools # hide\nRGB(:red)","category":"page"},{"location":"","page":"Home","title":"Home","text":"using ColorTypes,GridVisualizeTools # hide\nRGB(\"green\")","category":"page"},{"location":"#Visibility-handling-of-grid-cells","page":"Home","title":"Visibility handling of grid cells","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"extract_visible_cells3D\nextract_visible_bfaces3D","category":"page"},{"location":"#GridVisualizeTools.extract_visible_cells3D","page":"Home","title":"GridVisualizeTools.extract_visible_cells3D","text":"extract_visible_cells3D(\n    coord,\n    cellnodes,\n    cellregions,\n    nregions,\n    xyzcut;\n    primepoints,\n    Tp,\n    Tf\n)\n\n\nExtract visible tetrahedra - those intersecting with the planes x=xyzcut[1] or y=xyzcut[2]  or z=xyzcut[3]. \n\nReturn corresponding points and facets for each region for drawing as mesh (Makie,MeshCat) or trisurf (pyplot)\n\n\n\n\n\n","category":"function"},{"location":"#GridVisualizeTools.extract_visible_bfaces3D","page":"Home","title":"GridVisualizeTools.extract_visible_bfaces3D","text":"extract_visible_bfaces3D(\n    coord,\n    bfacenodes,\n    bfaceregions,\n    nbregions,\n    xyzcut;\n    primepoints,\n    Tp,\n    Tf\n)\n\n\nExtract visible boundary faces - those not cut off by the planes x=xyzcut[1] or y=xyzcut[2]  or z=xyzcut[3]. \n\nReturn corresponding points and facets for each region for drawing as mesh (Makie,MeshCat) or trisurf (pyplot)\n\n\n\n\n\n","category":"function"},{"location":"#Marching-triangles-and-tetrahdra","page":"Home","title":"Marching triangles and tetrahdra","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"marching_triangles\nmarching_tetrahedra","category":"page"},{"location":"#GridVisualizeTools.marching_triangles","page":"Home","title":"GridVisualizeTools.marching_triangles","text":"marching_triangles(coord, cellnodes, func, levels; Tc, Tp)\n\n\nCollect isoline snippets on triangles ready for linesegments!\n\n\n\n\n\n","category":"function"},{"location":"#GridVisualizeTools.marching_tetrahedra","page":"Home","title":"GridVisualizeTools.marching_tetrahedra","text":"marching_tetrahedra(\n    coord,\n    cellnodes,\n    func,\n    planes,\n    flevels;\n    tol,\n    primepoints,\n    primevalues,\n    Tv,\n    Tp,\n    Tf\n)\n\n\nExtract isosurfaces and plane interpolation for function on 3D tetrahedral mesh.\n\nThe basic observation is that locally on a tetrahedron, cuts with planes and isosurfaces of P1 functions look the same. This method calculates data for several plane cuts and several isosurfaces at once. \n\nInput parameters:\n\ncoord: 3 x n_points matrix of point coordinates\ncellnodes: 4 x n_cells matrix of point numbers per tetrahedron\nfunc: n_points vector of piecewise linear function values\nplanes: vector of plane equations ax+by+cz+d=0,each  stored as vector [a,b,c,d]\nflevels: vector of function isolevels\n\nKeyword arguments:\n\ntol: tolerance for tet x plane intersection\nprimepoints:  3 x n_prime matrix of \"corner points\" of domain to be plotted. These are not in the mesh but are used to calculate the axis size e.g. by Makie\nprimevalues:  n_prime vector of function values in corner points. These can be used to calculate function limits e.g. by Makie\nTv:  type of function values returned\nTp:  type of points returned\nTf:  type of facets returned\n\nReturn values: (points, tris, values)\n\npoints: vector of points (Tp)\ntris: vector of triangles (Tf)\nvalues: vector of function values (Tv)\n\nThese can be readily turned into a mesh with function values on it.\n\nCaveat: points with similar coordinates are not identified, e.g. an intersection of a plane and an edge will generate as many edge intersection points as there are tetrahedra adjacent to that edge. As a consequence, normal calculations for visualization alway will end up with facet normals, not point normals, and the visual impression of a rendered isosurface will show its piecewise linear genealogy.\n\n\n\n\n\n","category":"function"},{"location":"#Equidistant-markers-on-polylines","page":"Home","title":"Equidistant markers on polylines","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"markerpoints","category":"page"},{"location":"#GridVisualizeTools.markerpoints","page":"Home","title":"GridVisualizeTools.markerpoints","text":"markerpoints(points, nmarkers, transform)\n\n\nAssume that points are nodes of a polyline. Place nmarkers equidistant markers  at the polyline, under the assumption that the points are transformed via the transformation matrix M vor visualization.\n\n\n\n\n\n","category":"function"},{"location":"#Planes-and-isolevels","page":"Home","title":"Planes & isolevels","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"makeplanes","category":"page"},{"location":"#GridVisualizeTools.makeplanes","page":"Home","title":"GridVisualizeTools.makeplanes","text":"makeplanes(xyzmin, xyzmax, x, y, z)\n\n\nFor vectors of x, y and z coordinates, create equations for planes parallel to the coordinate axes.    \n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"using GridVisualizeTools\nmakeplanes([0.,0,0], [1.,1,1], [0.5], [],[])\n# output\n1-element Vector{Vector{Float64}}:\n [1.0, 0.0, 0.0, -0.5]","category":"page"},{"location":"","page":"Home","title":"Home","text":"using GridVisualizeTools\nmakeplanes([0.,0,0], [1.,1,1], [0.5], [0.5],[])\n# output\n2-element Vector{Vector{Float64}}:\n [1.0, 0.0, 0.0, -0.5]\n [0.0, 1.0, 0.0, -0.5]","category":"page"},{"location":"","page":"Home","title":"Home","text":"makeisolevels","category":"page"},{"location":"#GridVisualizeTools.makeisolevels","page":"Home","title":"GridVisualizeTools.makeisolevels","text":"makeisolevels(func, levels, limits, colorbarticks)\n\n\nUpdate levels, limits, colorbartics based on vector given in func.\n\nif limits[1]>limits[2], replace it by extrema(func).\nif levels is a number, replace it with a linear range in limits of length levels+2\nif colorbarticks is nothing replace it with levels and add the limits to the result otherwise, if it is a number, replace it  with a linear range of corresponding length\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"using GridVisualizeTools\nmakeisolevels(collect(0:0.1:10), 1, (-1,1),3)\n# output\n([-1.0, 0.0, 1.0], (-1, 1), [-1.0, 0.0, 1.0])","category":"page"},{"location":"","page":"Home","title":"Home","text":"using GridVisualizeTools\nmakeisolevels(collect(0:0.1:10), 1, (1,-1),3)\n# output\n([0.0, 5.0, 10.0], (0.0, 10.0), [0.0, 5.0, 10.0])","category":"page"},{"location":"","page":"Home","title":"Home","text":"using GridVisualizeTools\nmakeisolevels(collect(0:0.1:10), 1, (1,-1),nothing)\n# output\n([0.0, 5.0, 10.0], (0.0, 10.0), [0.0, 5.0, 10.0])","category":"page"},{"location":"#Private-API","page":"Home","title":"Private API","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"GridVisualizeTools.tet_x_plane!","category":"page"},{"location":"#GridVisualizeTools.tet_x_plane!","page":"Home","title":"GridVisualizeTools.tet_x_plane!","text":"tet_x_plane!(\n    ixcoord,\n    ixvalues,\n    pointlist,\n    node_indices,\n    planeq_values,\n    function_values;\n    tol\n)\n\n\nCalculate intersections between tetrahedron with given piecewise linear   function data and plane \n\nAdapted from gltools.\n\nA non-empty intersection is either a triangle or a planar quadrilateral,   defined by either 3 or 4 intersection points between tetrahedron edges   and the plane.\n\nInput: \n\npointlist: 3xN array of grid point coordinates\nnodeindices: 4 element array of node indices (pointing into pointlist and functionvalues)\nplaneq_values: 4 element array of plane equation evaluated at the node coordinates\nfunction_values: N element array of function values\n\nMutates:\n\nixcoord: 3x4 array of plane - tetedge intersection coordinates\nixvalues: 4 element array of fuction values at plane - tetdedge intersections\n\nReturns:\n\nnxs,ixcoord,ixvalues\n\nThis method can be used both for the evaluation of plane sections and for   the evaluation of function isosurfaces.\n\n\n\n\n\n","category":"function"}]
}