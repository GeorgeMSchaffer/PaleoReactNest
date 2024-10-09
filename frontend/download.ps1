$headers=@{}
$headers.Add("user-agent", "vscode-restclient")
$response = Invoke-WebRequest -Uri 'https://paleobiodb.org/data1.2/occs/list.json?vocab=pbdb&limit=1&max_ma=250&min_ma=200&pgm=gplates%2Cscotese%2Cseton&show=class%2Cgenus%2Csubgenus%2Cabund%2Cecospace%2Ccoords%2Cloc%2Cpaleoloc%2Clith%2Cenv%2Cgeo%2Ctimebins%2Ctimecompare' -Method GET -Headers $headers