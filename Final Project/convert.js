/* Conversion Format
Each function takes in two arguments, the element ID and the input value
Each value is then transformed as float
Each input is then reduced to a single main unit
Each main unit is then transformed to every other unit
Each unit is then displayed asynchronously
*/

// Length Conversion //
function lengthConvert(id, val) {
    var mm

    val = parseFloat(val)

    if (id == "mm") {
        mm = val
    }

    else if (id == "cm") {
        mm = val * 10
    }

    else if (id == "m") {
        mm = val * 1000
    }

    else if (id == "km") {
        mm = val * 1000000
    }

    else if (id == "in") {
        mm = val * 25.4
    }

    else if (id == "ft") {
        mm = val * 304.8
    }

    else if (id == "yard") {
        mm = val * 914.4
    }

    else if (id == "mile") {
        mm = val * 1609300
    }

    else if (id == "naut") {
        mm = val * 1853000
    }

    var cm
    var m
    var km
    var inch
    var ft
    var yard
    var mile
    var naut

    cm = mm/10
    m = cm/100
    km = m/1000
    inch = cm/2.54
    ft = inch/12
    yard = ft/3
    mile = yard/1760
    naut = yard/2025.4

    if (id == "mm") {
        document.getElementById("cm").value = cm.toFixed(3)
        document.getElementById("m").value = m.toFixed(3)
        document.getElementById("km").value = km.toFixed(3)
        document.getElementById("in").value = inch.toFixed(3)
        document.getElementById("ft").value = ft.toFixed(3)
        document.getElementById("yard").value = yard.toFixed(3)
        document.getElementById("mile").value = mile.toFixed(3)
        document.getElementById("naut").value = naut.toFixed(3)
    }

    else if (id == "cm") {
        document.getElementById("mm").value = mm.toFixed(3)
        document.getElementById("m").value = m.toFixed(3)
        document.getElementById("km").value = km.toFixed(3)
        document.getElementById("in").value = inch.toFixed(3)
        document.getElementById("ft").value = ft.toFixed(3)
        document.getElementById("yard").value = yard.toFixed(3)
        document.getElementById("mile").value = mile.toFixed(3)
        document.getElementById("naut").value = naut.toFixed(3)
    }

    else if (id == "m") {
        document.getElementById("mm").value = mm.toFixed(3)
        document.getElementById("cm").value = cm.toFixed(3)
        document.getElementById("km").value = km.toFixed(3)
        document.getElementById("in").value = inch.toFixed(3)
        document.getElementById("ft").value = ft.toFixed(3)
        document.getElementById("yard").value = yard.toFixed(3)
        document.getElementById("mile").value = mile.toFixed(3)
        document.getElementById("naut").value = naut.toFixed(3)
    }

    else if (id == "km") {
        document.getElementById("mm").value = mm.toFixed(3)
        document.getElementById("cm").value = cm.toFixed(3)
        document.getElementById("m").value = m.toFixed(3)
        document.getElementById("in").value = inch.toFixed(3)
        document.getElementById("ft").value = ft.toFixed(3)
        document.getElementById("yard").value = yard.toFixed(3)
        document.getElementById("mile").value = mile.toFixed(3)
        document.getElementById("naut").value = naut.toFixed(3)
    }

    else if (id == "in") {
        document.getElementById("mm").value = mm.toFixed(3)
        document.getElementById("cm").value = cm.toFixed(3)
        document.getElementById("m").value = m.toFixed(3)
        document.getElementById("km").value = km.toFixed(3)
        document.getElementById("ft").value = ft.toFixed(3)
        document.getElementById("yard").value = yard.toFixed(3)
        document.getElementById("mile").value = mile.toFixed(3)
        document.getElementById("naut").value = naut.toFixed(3)
    }

    else if (id == "ft") {
        document.getElementById("mm").value = mm.toFixed(3)
        document.getElementById("cm").value = cm.toFixed(3)
        document.getElementById("m").value = m.toFixed(3)
        document.getElementById("km").value = km.toFixed(3)
        document.getElementById("in").value = inch.toFixed(3)
        document.getElementById("yard").value = yard.toFixed(3)
        document.getElementById("mile").value = mile.toFixed(3)
        document.getElementById("naut").value = naut.toFixed(3)
    }

    else if (id == "yard") {
        document.getElementById("mm").value = mm.toFixed(3)
        document.getElementById("cm").value = cm.toFixed(3)
        document.getElementById("m").value = m.toFixed(3)
        document.getElementById("km").value = km.toFixed(3)
        document.getElementById("in").value = inch.toFixed(3)
        document.getElementById("ft").value = ft.toFixed(3)
        document.getElementById("mile").value = mile.toFixed(3)
        document.getElementById("naut").value = naut.toFixed(3)
    }

    else if (id == "mile") {
        document.getElementById("mm").value = mm.toFixed(3)
        document.getElementById("cm").value = cm.toFixed(3)
        document.getElementById("m").value = m.toFixed(3)
        document.getElementById("km").value = km.toFixed(3)
        document.getElementById("in").value = inch.toFixed(3)
        document.getElementById("ft").value = ft.toFixed(3)
        document.getElementById("yard").value = yard.toFixed(3)
        document.getElementById("naut").value = naut.toFixed(3)
    }

    else if (id == "naut") {
        document.getElementById("mm").value = mm.toFixed(3)
        document.getElementById("cm").value = cm.toFixed(3)
        document.getElementById("m").value = m.toFixed(3)
        document.getElementById("km").value = km.toFixed(3)
        document.getElementById("in").value = inch.toFixed(3)
        document.getElementById("ft").value = ft.toFixed(3)
        document.getElementById("yard").value = yard.toFixed(3)
        document.getElementById("mile").value = mile.toFixed(3)
    }
}

// Area Conversion //

function areaConvert(id, val) {
    var mm2

    val = parseFloat(val)

    if (id == "mm2") {
        mm2 = val
    }

    else if (id == "cm2") {
        mm2 = val * 100
    }

    else if (id == "m2") {
        mm2 = val * 1000000
    }

    else if (id == "km2") {
        mm2 = val * 10000 * 10000 * 10000
    }

    else if (id == "in2") {
        mm2 = val * 645.16
    }

    else if (id == "ft2") {
        mm2 = val * 0.0929 * 1000000
    }

    else if (id == "acre") {
        mm2 = val * 4046.9 * 1000000
    }

    else if (id == "Hectare") {
        mm2 = val * 10000 * 10000 * 100
    }

    else if (id == "yard2") {
        mm2 = val * 0.8361 * 1000000
    }

    else if (id == "mile2") {
        mm2 = val * 2.59 * 10000 * 10000 * 10000
    }

    var cm2
    var m2
    var km2
    var in2
    var ft2
    var yard2
    var acre
    var hect
    var mile2

    cm2 = mm2/100
    m2 = cm2/10000
    km2 = m2/1000000
    in2 = cm2/6.4516
    ft2 = m2/0.0929
    yard2 = m2/0.8361
    acre = m2/4046.9
    hect = m2/10000
    mile2 = km2/2.59

    if (id == "mm2") {
        document.getElementById("cm2").value = cm2.toFixed(3)
        document.getElementById("m2").value = m2.toFixed(3)
        document.getElementById("km2").value = km2.toFixed(3)
        document.getElementById("in2").value = in2.toFixed(3)
        document.getElementById("ft2").value = ft2.toFixed(3)
        document.getElementById("yard2").value = yard2.toFixed(3)
        document.getElementById("Acre").value = acre.toFixed(3)
        document.getElementById("Hectare").value = hect.toFixed(3)
        document.getElementById("mile2").value = mile2.toFixed(3)
    }

    else if (id == "cm2") {
      document.getElementById("mm2").value = mm2.toFixed(3)
      document.getElementById("m2").value = m2.toFixed(3)
      document.getElementById("km2").value = km2.toFixed(3)
      document.getElementById("in2").value = in2.toFixed(3)
      document.getElementById("ft2").value = ft2.toFixed(3)
      document.getElementById("yard2").value = yard2.toFixed(3)
      document.getElementById("Acre").value = acre.toFixed(3)
      document.getElementById("Hectare").value = hect.toFixed(3)
      document.getElementById("mile2").value = mile2.toFixed(3)
    }

    else if (id == "m2") {
      document.getElementById("mm2").value = mm2.toFixed(3)
      document.getElementById("cm2").value = cm2.toFixed(3)
      document.getElementById("km2").value = km2.toFixed(3)
      document.getElementById("in2").value = in2.toFixed(3)
      document.getElementById("ft2").value = ft2.toFixed(3)
      document.getElementById("yard2").value = yard2.toFixed(3)
      document.getElementById("Acre").value = acre.toFixed(3)
      document.getElementById("Hectare").value = hect.toFixed(3)
      document.getElementById("mile2").value = mile2.toFixed(3)
    }

    else if (id == "km2") {
      document.getElementById("mm2").value = mm2.toFixed(3)
      document.getElementById("cm2").value = cm2.toFixed(3)
      document.getElementById("m2").value = m2.toFixed(3)
      document.getElementById("in2").value = in2.toFixed(3)
      document.getElementById("ft2").value = ft2.toFixed(3)
      document.getElementById("yard2").value = yard2.toFixed(3)
      document.getElementById("Acre").value = acre.toFixed(3)
      document.getElementById("Hectare").value = hect.toFixed(3)
      document.getElementById("mile2").value = mile2.toFixed(3)
    }

    else if (id == "in2") {
      document.getElementById("mm2").value = mm2.toFixed(3)
      document.getElementById("cm2").value = cm2.toFixed(3)
      document.getElementById("m2").value = m2.toFixed(3)
      document.getElementById("km2").value = km2.toFixed(3)
      document.getElementById("ft2").value = ft2.toFixed(3)
      document.getElementById("yard2").value = yard2.toFixed(3)
      document.getElementById("Acre").value = acre.toFixed(3)
      document.getElementById("Hectare").value = hect.toFixed(3)
      document.getElementById("mile2").value = mile2.toFixed(3)
    }

    else if (id == "ft2") {
      document.getElementById("mm2").value = mm2.toFixed(3)
      document.getElementById("cm2").value = cm2.toFixed(3)
      document.getElementById("m2").value = m2.toFixed(3)
      document.getElementById("km2").value = km2.toFixed(3)
      document.getElementById("in2").value = in2.toFixed(3)
      document.getElementById("yard2").value = yard2.toFixed(3)
      document.getElementById("Acre").value = acre.toFixed(3)
      document.getElementById("Hectare").value = hect.toFixed(3)
      document.getElementById("mile2").value = mile2.toFixed(3)
    }

    else if (id == "acre") {
      document.getElementById("mm2").value = mm2.toFixed(3)
      document.getElementById("cm2").value = cm2.toFixed(3)
      document.getElementById("m2").value = m2.toFixed(3)
      document.getElementById("km2").value = km2.toFixed(3)
      document.getElementById("in2").value = in2.toFixed(3)
      document.getElementById("ft2").value = ft2.toFixed(3)
      document.getElementById("yard2").value = yard2.toFixed(3)
      document.getElementById("Hectare").value = hect.toFixed(3)
      document.getElementById("mile2").value = mile2.toFixed(3)
    }

    else if (id == "hect") {
      document.getElementById("mm2").value = mm2.toFixed(3)
      document.getElementById("cm2").value = cm2.toFixed(3)
      document.getElementById("m2").value = m2.toFixed(3)
      document.getElementById("km2").value = km2.toFixed(3)
      document.getElementById("in2").value = in2.toFixed(3)
      document.getElementById("ft2").value = ft2.toFixed(3)
      document.getElementById("yard2").value = yard2.toFixed(3)
      document.getElementById("Acre").value = acre.toFixed(3)
      document.getElementById("mile2").value = mile2.toFixed(3)
    }

    else if (id == "yard2") {
      document.getElementById("mm2").value = mm2.toFixed(3)
      document.getElementById("cm2").value = cm2.toFixed(3)
      document.getElementById("m2").value = m2.toFixed(3)
      document.getElementById("km2").value = km2.toFixed(3)
      document.getElementById("in2").value = in2.toFixed(3)
      document.getElementById("ft2").value = ft2.toFixed(3)
      document.getElementById("Acre").value = acre.toFixed(3)
      document.getElementById("Hectare").value = hect.toFixed(3)
      document.getElementById("mile2").value = mile2.toFixed(3)
    }

    else if (id == "mile2") {
      document.getElementById("mm2").value = mm2.toFixed(3)
      document.getElementById("cm2").value = cm2.toFixed(3)
      document.getElementById("m2").value = m2.toFixed(3)
      document.getElementById("km2").value = km2.toFixed(3)
      document.getElementById("in2").value = in2.toFixed(3)
      document.getElementById("ft2").value = ft2.toFixed(3)
      document.getElementById("yard2").value = yard2.toFixed(3)
      document.getElementById("Acre").value = acre.toFixed(3)
      document.getElementById("Hectare").value = hect.toFixed(3)
    }
}

// Volume Conversion //

function volumeConvert(id, val) {
    var cm3;

    val = parseFloat(val);

    if (id == "cm3") {
        cm3 = val
    }

    else if (id == "m3") {
        cm3 = val * 1000000
    }

    else if (id == "in3") {
        cm3 = val * 16.387
    }

    else if (id == "ft3") {
        cm3 = val * 1728 * 16.387
    }

    else if (id == "l") {
        cm3 = val * 1000
    }

    else if (id == "hl") {
        cm3 = val * 100000
    }

    else if (id == "floz") {
        cm3 = val * 28413
    }

    else if (id == "pint") {
        cm3 = val * 568.3
    }

    else if (id == "gal") {
        cm3 = val * 4546100
    }

    else if (id == "USfloz") {
        cm3 = val * 29574
    }

    else if (id == "USpint") {
        cm3 = val * 473.1 * 1000
    }

    else if (id == "USgal") {
        cm3 = val	* 3785.4 * 1000
    }

    var m3;
    var l;
    var hl;
    var in3;
    var ft3;
    var floz
    var pint;
    var gal;
    var USfloz;
    var USpint;
    var USgal;

    m3 = cm3/1000000
    in3 = cm3/16.387
    ft3 = in3/1728
    l = cm3/1000
    hl = l/100
    floz = (l * 1000)/28.413
    pint = floz/20
    gal = pint/8
    USfloz = (l * 1000)/29.574
    USpint = USfloz/16
    USgal = USpint/8

    if (id == "cm3") {
        document.getElementById("m3").value = m3.toFixed(3)
        document.getElementById("in3").value = in3.toFixed(3)
        document.getElementById("ft3").value = ft3.toFixed(3)
        document.getElementById("l").value = l.toFixed(3)
        document.getElementById("hl").value = hl.toFixed(3)
        document.getElementById("floz").value = floz.toFixed(3)
        document.getElementById("pint").value = pint.toFixed(3)
        document.getElementById("gal").value = gal.toFixed(3)
        document.getElementById("USfloz").value = USfloz.toFixed(3)
        document.getElementById("USpint").value = USpint.toFixed(3)
        document.getElementById("USgal").value = USgal.toFixed(3)
    }

    else if (id == "m3") {
        document.getElementById("cm3").value = cm3.toFixed(3)
        document.getElementById("in3").value = in3.toFixed(3)
        document.getElementById("ft3").value = ft3.toFixed(3)
        document.getElementById("l").value = l.toFixed(3)
        document.getElementById("hl").value = hl.toFixed(3)
        document.getElementById("floz").value = floz.toFixed(3)
        document.getElementById("pint").value = pint.toFixed(3)
        document.getElementById("gal").value = gal.toFixed(3)
        document.getElementById("USfloz").value = USfloz.toFixed(3)
        document.getElementById("USpint").value = USpint.toFixed(3)
        document.getElementById("USgal").value = USgal.toFixed(3)
    }

    else if (id == "in3") {
        document.getElementById("cm3").value = cm3.toFixed(3)
        document.getElementById("m3").value = m3.toFixed(3)
        document.getElementById("ft3").value = ft3.toFixed(3)
        document.getElementById("l").value = l.toFixed(3)
        document.getElementById("hl").value = hl.toFixed(3)
        document.getElementById("floz").value = floz.toFixed(3)
        document.getElementById("pint").value = pint.toFixed(3)
        document.getElementById("gal").value = gal.toFixed(3)
        document.getElementById("USfloz").value = USfloz.toFixed(3)
        document.getElementById("USpint").value = USpint.toFixed(3)
        document.getElementById("USgal").value = USgal.toFixed(3)
    }

    else if (id == "ft3") {
        document.getElementById("cm3").value = cm3.toFixed(3)
        document.getElementById("m3").value = m3.toFixed(3)
        document.getElementById("in3").value = in3.toFixed(3)
        document.getElementById("l").value = l.toFixed(3)
        document.getElementById("hl").value = hl.toFixed(3)
        document.getElementById("floz").value = floz.toFixed(3)
        document.getElementById("pint").value = pint.toFixed(3)
        document.getElementById("gal").value = gal.toFixed(3)
        document.getElementById("USfloz").value = USfloz.toFixed(3)
        document.getElementById("USpint").value = USpint.toFixed(3)
        document.getElementById("USgal").value = USgal.toFixed(3)
    }

    else if (id == "l") {
        document.getElementById("cm3").value = cm3.toFixed(3)
        document.getElementById("m3").value = m3.toFixed(3)
        document.getElementById("in3").value = in3.toFixed(3)
        document.getElementById("ft3").value = ft3.toFixed(3)
        document.getElementById("hl").value = hl.toFixed(3)
        document.getElementById("floz").value = floz.toFixed(3)
        document.getElementById("pint").value = pint.toFixed(3)
        document.getElementById("gal").value = gal.toFixed(3)
        document.getElementById("USfloz").value = USfloz.toFixed(3)
        document.getElementById("USpint").value = USpint.toFixed(3)
        document.getElementById("USgal").value = USgal.toFixed(3)
    }

    else if (id == "hl") {
        document.getElementById("cm3").value = cm3.toFixed(3)
        document.getElementById("m3").value = m3.toFixed(3)
        document.getElementById("in3").value = in3.toFixed(3)
        document.getElementById("ft3").value = ft3.toFixed(3)
        document.getElementById("l").value = l.toFixed(3)
        document.getElementById("floz").value = floz.toFixed(3)
        document.getElementById("pint").value = pint.toFixed(3)
        document.getElementById("gal").value = gal.toFixed(3)
        document.getElementById("USfloz").value = USfloz.toFixed(3)
        document.getElementById("USpint").value = USpint.toFixed(3)
        document.getElementById("USgal").value = USgal.toFixed(3)
    }

    else if (id == "floz") {
        document.getElementById("cm3").value = cm3.toFixed(3)
        document.getElementById("m3").value = m3.toFixed(3)
        document.getElementById("in3").value = in3.toFixed(3)
        document.getElementById("ft3").value = ft3.toFixed(3)
        document.getElementById("l").value = l.toFixed(3)
        document.getElementById("hl").value = hl.toFixed(3)
        document.getElementById("pint").value = pint.toFixed(3)
        document.getElementById("gal").value = gal.toFixed(3)
        document.getElementById("USfloz").value = USfloz.toFixed(3)
        document.getElementById("USpint").value = USpint.toFixed(3)
        document.getElementById("USgal").value = USgal.toFixed(3)
    }

    else if (id == "pint") {
        document.getElementById("cm3").value = cm3.toFixed(3)
        document.getElementById("m3").value = m3.toFixed(3)
        document.getElementById("in3").value = in3.toFixed(3)
        document.getElementById("ft3").value = ft3.toFixed(3)
        document.getElementById("l").value = l.toFixed(3)
        document.getElementById("hl").value = hl.toFixed(3)
        document.getElementById("floz").value = floz.toFixed(3)
        document.getElementById("gal").value = gal.toFixed(3)
        document.getElementById("USfloz").value = USfloz.toFixed(3)
        document.getElementById("USpint").value = USpint.toFixed(3)
        document.getElementById("USgal").value = USgal.toFixed(3)
    }

    else if (id == "gal") {
        document.getElementById("cm3").value = cm3.toFixed(3)
        document.getElementById("m3").value = m3.toFixed(3)
        document.getElementById("in3").value = in3.toFixed(3)
        document.getElementById("ft3").value = ft3.toFixed(3)
        document.getElementById("l").value = l.toFixed(3)
        document.getElementById("hl").value = hl.toFixed(3)
        document.getElementById("floz").value = floz.toFixed(3)
        document.getElementById("pint").value = pint.toFixed(3)
        document.getElementById("USfloz").value = USfloz.toFixed(3)
        document.getElementById("USpint").value = USpint.toFixed(3)
        document.getElementById("USgal").value = USgal.toFixed(3)
    }

    else if (id == "USfloz") {
        document.getElementById("cm3").value = cm3.toFixed(3)
        document.getElementById("m3").value = m3.toFixed(3)
        document.getElementById("in3").value = in3.toFixed(3)
        document.getElementById("ft3").value = ft3.toFixed(3)
        document.getElementById("l").value = l.toFixed(3)
        document.getElementById("hl").value = hl.toFixed(3)
        document.getElementById("floz").value = floz.toFixed(3)
        document.getElementById("pint").value = pint.toFixed(3)
        document.getElementById("gal").value = gal.toFixed(3)
        document.getElementById("USpint").value = USpint.toFixed(3)
        document.getElementById("USgal").value = USgal.toFixed(3)
    }

    else if (id == "USpint") {
        document.getElementById("cm3").value = cm3.toFixed(3)
        document.getElementById("m3").value = m3.toFixed(3)
        document.getElementById("in3").value = in3.toFixed(3)
        document.getElementById("ft3").value = ft3.toFixed(3)
        document.getElementById("l").value = l.toFixed(3)
        document.getElementById("hl").value = hl.toFixed(3)
        document.getElementById("floz").value = floz.toFixed(3)
        document.getElementById("pint").value = pint.toFixed(3)
        document.getElementById("gal").value = gal.toFixed(3)
        document.getElementById("USfloz").value = USfloz.toFixed(3)
        document.getElementById("USgal").value = USgal.toFixed(3)
    }

    else if (id == "USgal") {
        document.getElementById("cm3").value = cm3.toFixed(3)
        document.getElementById("m3").value = m3.toFixed(3)
        document.getElementById("in3").value = in3.toFixed(3)
        document.getElementById("ft3").value = ft3.toFixed(3)
        document.getElementById("l").value = l.toFixed(3)
        document.getElementById("hl").value = hl.toFixed(3)
        document.getElementById("floz").value = floz.toFixed(3)
        document.getElementById("pint").value = pint.toFixed(3)
        document.getElementById("gal").value = gal.toFixed(3)
        document.getElementById("USfloz").value = USfloz.toFixed(3)
        document.getElementById("USpint").value = USpint.toFixed(3)
    }
}

// Mass Conversion //

function massConvert(id, val) {
    var mg;

    val = parseFloat(val);

    if (id == "mg") {
      mg = val
    }

    else if (id == "g") {
      mg = val * 1000
    }

    else if (id == "kg") {
      mg = val * 1000000
    }

    else if (id == "ton") {
      mg = val * 1000000000
    }

    else if (id == "oz") {
      mg = val * 28.35 * 1000
    }

    else if (id == "lb") {
      mg = val * 16 * 28.35 * 1000
    }

    var g;
    var kg;
    var ton;
    var oz;
    var lb;

    g = mg/1000
    kg = g/1000
    ton = kg/1000
    oz = g/28.35
    lb = oz/16

    if (id == "mg") {
      document.getElementById("g").value = g.toFixed(3)
      document.getElementById("kg").value = kg.toFixed(3)
      document.getElementById("ton").value = ton.toFixed(3)
      document.getElementById("oz").value = oz.toFixed(3)
      document.getElementById("lb").value = lb.toFixed(3)
    }

    else if (id == "g") {
      document.getElementById("mg").value = mg.toFixed(3)
      document.getElementById("kg").value = kg.toFixed(3)
      document.getElementById("ton").value = ton.toFixed(3)
      document.getElementById("oz").value = oz.toFixed(3)
      document.getElementById("lb").value = lb.toFixed(3)
    }

    else if (id == "kg") {
      document.getElementById("mg").value = mg.toFixed(3)
      document.getElementById("g").value = g.toFixed(3)
      document.getElementById("ton").value = ton.toFixed(3)
      document.getElementById("oz").value = oz.toFixed(3)
      document.getElementById("lb").value = lb.toFixed(3)
    }

    else if (id == "ton") {
      document.getElementById("mg").value = mg.toFixed(3)
      document.getElementById("g").value = g.toFixed(3)
      document.getElementById("kg").value = kg.toFixed(3)
      document.getElementById("oz").value = oz.toFixed(3)
      document.getElementById("lb").value = lb.toFixed(3)
    }

    else if (id == "oz") {
      document.getElementById("mg").value = mg.toFixed(3)
      document.getElementById("g").value = g.toFixed(3)
      document.getElementById("kg").value = kg.toFixed(3)
      document.getElementById("ton").value = ton.toFixed(3)
      document.getElementById("lb").value = lb.toFixed(3)
    }

    else if (id == "lb") {
      document.getElementById("mg").value = mg.toFixed(3)
      document.getElementById("g").value = g.toFixed(3)
      document.getElementById("kg").value = kg.toFixed(3)
      document.getElementById("ton").value = ton.toFixed(3)
      document.getElementById("oz").value = oz.toFixed(3)
    }
}

// Temperature Conversion //

function tempConvert(id, val) {
    var c;

    val = parseFloat(val);

    if (id == "Fahrenheit") {
      c = (val - 32) / (9/5)

    }

    else if (id == "Celcius") {
      c = val
    }

    else if (id == "Kelvin") {
      c = val - 273.15
    }

    var f;
    var k;

    f = (c * (9/5)) + 32;
    k = c + 273.15;

    if (id == "Fahrenheit") {
      document.getElementById("Celcius").value = c.toFixed(2)
      document.getElementById("Kelvin").value = k.toFixed(2)
    }

    else if (id == "Celcius") {
      document.getElementById("Fahrenheit").value = f.toFixed(2)
      document.getElementById("Kelvin").value = k.toFixed(2)
    }

    else if (id == "Kelvin") {
      document.getElementById("Celcius").value = c.toFixed(2)
      document.getElementById("Fahrenheit").value = f.toFixed(2)
    }
}
