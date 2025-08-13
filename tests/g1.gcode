header:lowercase only unless it's a header command like W2, which means weldflow=2
G0 X10 Y10 Z10
G0 X10 Y10 Z0
;Comment 1
G1 X0 Y0 Z0
G2 X10 Y0 R10
;This is another comment
G0 X0 Y0 Z0
G3 X10 Y0 R5

