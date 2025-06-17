using Test, Documenter, GridVisualizeTools, ColorTypes, Colors

DocMeta.setdocmeta!(GridVisualizeTools, :DocTestSetup, :(using GridVisualizeTools, ColorTypes, Colors); recursive = true)
doctest(GridVisualizeTools)

@testset "calculate_plane_tetrahedron_intersection" begin
    #Testing amount of intersected edges of (x,y,z)-tetrahedron (0,0,0),(1,0,0),(1,1,0),(1,1,1) with plane x+y-1=0
    @test GridVisualizeTools.calculate_plane_tetrahedron_intersection!(
        [0.0 0.0 0.0 0.0 0.0 0.0; 0.0 0.0 0.0 0.0 0.0 0.0; 0.0 0.0 0.0 0.0 0.0 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0; 0.0 0.0 1.0 1.0 0.0 0.0 1.0 1.0; 0.0 0.0 0.0 0.0 1.0 1.0 1.0 1.0],
        Int32[1, 2, 4, 8],
        [-1.0, 0.0, 1.0, 1.0],
        [0, 0, 0, 0, 0, 0, 0, 1],
        tol = 1.0e-12
    ) == 3
    #Testing amount of intersected edges for specific tetrahedron with plane x = 0.5
    @test GridVisualizeTools.calculate_plane_tetrahedron_intersection!(
        [0.5 0.5 0.500000001260275 0.5000000012855993 0.0 0.0; 0.7 1.0 0.13480492277555536 0.8372051924096586 0.0 0.0; 0.0 0.1 0.19515864670162444 0.18583544507073008 0.0 0.0],
        [1.460741148435986e-32, 1.2130506551371849e-32, 0.19103133044823084, 0.22244570933305352, 0.0, 0.0],
        [0.5 0.5 0.48305 0.55059; 0.7165 0.8 0.76944 0.76519; 0.12501 0.0 0.16147 0.16147],
        Int32[1, 2, 3, 4],
        [0.0, 0.0, -0.016950000077486038, 0.05059000104665756],
        [0.18823234602961633, 1.519472645376028e-32, 0.2384620788839228, 0.2550147563453821],
        tol = 1.0e-12
    ) == 3
end


if isdefined(Docs, :undocumented_names) # >=1.11
    @testset "UndocumentedNames" begin
        @test isempty(Docs.undocumented_names(GridVisualizeTools))
    end
end
