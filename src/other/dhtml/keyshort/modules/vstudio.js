g_modulename = 'Visual Studio';
Modes.modes  = 	[
['Global' , 4],
['Text Editor' , 10],

['Class Diagram' , 1],
['DataSet Editor' , 2],
['Deployment Designer' , 3],

['HTML Editor Design View' , 5],
['HTML Editor Source View' , 6],
['Managed Resources Editor' , 7],
['Report Designer' , 8],
['Settings Designer' , 9],

['VC Accelerator Editor' , 11],
['VC Dialog Editor' , 12],
['VC Image Editor' , 13],
['VC String Editor' , 14],
['View Designer' , 15],
['WebBrowser' , 16],
['Windows Forms Designer' , 17],
['XML Editor Schema View' , 18]];
	
//In the order of control|shift|alt
//Possible combinations:
//normal
//control
//shift
//alt
//controlshift
//controlalt
//shiftalt
//controlshiftalt

gk[1] = {};
gk[1]["%Num%+"] = {};
gk[1]["%Num%+"].normal = {  brev:"Expand", name:"ClassDiagram.Expand" };
gk[1]["B"] = {};
gk[1]["B"].shiftalt = {  brev:"ExpandCollapseBaseTypeList", name:"Edit.ExpandCollapseBaseTypeList" };
gk[1]["Del"] = {};
gk[1]["Del"].control = {  brev:"Delete", name:"Edit.Delete" };
gk[1]["Del"].normal = {  brev:"RemovefromDiagram", name:"Edit.RemovefromDiagram" };
gk[1]["Enter"] = {};
gk[1]["Enter"].normal = {  brev:"ViewCode", name:"View.ViewCode" };
gk[1]["L"] = {};
gk[1]["L"].shiftalt = {  brev:"NavigateToLollipop", name:"Edit.NavigateToLollipop" };
gk[1]["%Num%-"] = {};
gk[1]["%Num%-"].normal = {  brev:"Collapse", name:"ClassDiagram.Collapse" };
gk[2] = {};
gk[2]["Ins"] = {};
gk[2]["Ins"].normal = {  brev:"InsertColumn", name:"Data.InsertColumn" };
gk[2]["L"] = {};
gk[2]["L"].control = {  brev:"Column", name:"Data.Column" };
gk[3] = {};
gk[3]["D"] = {};
gk[3]["D"].shiftalt = {  brev:"RedrawConnection", name:"Diagram.RedrawConnection" };
gk[3]["T"] = {};
gk[3]["T"].shiftalt = {  brev:"RerouteConnection", name:"Diagram.RerouteConnection" };
gk[4] = {};
gk[4]["-"] = {};
gk[4]["-"].control = {  brev:"NavigateBackward", name:"View.NavigateBackward" };
gk[4]["-"].controlshift = {  brev:"NavigateForward", name:"View.NavigateForward" };
gk[4]["."] = {};
gk[4]["."].control = {  brev:"ShowSmartTag", name:"View.ShowSmartTag" };
gk[4]["/"] = {};
gk[4]["/"].control = {  brev:"GoToCommandLine", name:"Tools.GoToCommandLine" };
gk[4]["\\"] = {};
gk[4]["\\"].control = {  brev:"ErrorList#", name:"View.ErrorList#" };
gk[4]["1"] = {};
gk[4]["1"].controlshift = {  brev:"BrowseNext", name:"View.BrowseNext" };
gk[4]["2"] = {};
gk[4]["2"].controlshift = {  brev:"BrowsePrevious", name:"View.BrowsePrevious" };
gk[4]["7"] = {};
gk[4]["7"].controlshift = {  brev:"ForwardBrowseContext", name:"View.ForwardBrowseContext" };
gk[4]["8"] = {};
gk[4]["8"].controlshift = {  brev:"PopBrowseContext", name:"View.PopBrowseContext" };
gk[4]["A"] = {};
gk[4]["A"].control = {  brev:"SelectAll", name:"Edit.SelectAll" };
gk[4]["A"].controlalt = {  brev:"CommandWindow", name:"View.CommandWindow" };
gk[4]["A"].controlshift = {  brev:"AddNewItem", name:"Project.AddNewItem" };
gk[4]["A"].shiftalt = {  brev:"AddExistingItem", name:"Project.AddExistingItem" };
gk[4]["B"] = {};
gk[4]["B"].controlalt = {  brev:"Breakpoints", name:"Debug.Breakpoints" };
gk[4]["B"].control = {  brev:"BreakatFunction", name:"Debug.BreakatFunction" };
gk[4]["B"].controlshift = {  brev:"BuildSolution", name:"Build.BuildSolution" };
gk[4]["Bkspce"] = {};
gk[4]["Bkspce"].alt = {  brev:"Undo", name:"Edit.Undo" };
gk[4]["Break"] = {};
gk[4]["Break"].controlalt = {  brev:"BreakAll", name:"Debug.BreakAll" };
gk[4]["Break"].control = {  brev:"Cancel", name:"Build.Cancel" };
gk[4]["C"] = {};
gk[4]["C"].controlalt = {  brev:"CallStack", name:"Debug.CallStack" };
gk[4]["C"].controlshift = {  brev:"ClassView", name:"View.ClassView" };
gk[4]["D"] = {};
gk[4]["D"].controlalt = {  brev:"Disassembly", name:"Debug.Disassembly" };
gk[4]["D"].control = {  brev:"GoToFindCombo", name:"Edit.GoToFindCombo" };
gk[4]["D"].shiftalt = {  brev:"ShowDataSources", name:"Data.ShowDataSources" };
gk[4]["Del"] = {};
gk[4]["Del"].shift = {  brev:"Cut", name:"Edit.Cut" };
gk[4]["Down"] = {};
gk[4]["Down"].controlalt = {  brev:"ShowEzMDIFileList", name:"Window.ShowEzMDIFileList" };
//gk[4]["Down"].normal = {  brev:"MoveControlDownGrid", name:"Edit.MoveControlDownGrid" };
gk[4]["Down"].shift = {  brev:"SizeControlDownGrid", name:"Edit.SizeControlDownGrid" };
gk[4]["E"] = {};
gk[4]["E"].controlalt = {  brev:"Exceptions", name:"Debug.Exceptions" };
gk[4]["E"].controlshift = {  brev:"ResourceView", name:"View.ResourceView" };
gk[4]["Enter"] = {};
gk[4]["Enter"].alt = {  brev:"Properties", name:"Diagram.Properties" };
gk[4]["Enter"].normal = {  brev:"ShowTileGrid", name:"Edit.ShowTileGrid" };
gk[4]["Enter"].shiftalt = {  brev:"FullScreen", name:"View.FullScreen" };
gk[4]["Esc"] = {};
gk[4]["Esc"].normal = {  brev:"ActivateDocumentWindow", name:"Window.ActivateDocumentWindow" };
gk[4]["Esc"].shift = {  brev:"CloseToolWindow", name:"Window.CloseToolWindow" };
gk[4]["F"] = {};
gk[4]["F"].control = {  brev:"Find", name:"Edit.Find" };
gk[4]["F"].controlshift = {  brev:"FindinFiles", name:"Edit.FindinFiles" };
gk[4]["F1"] = {};
gk[4]["F1"].controlalt = {  brev:"Contents", name:"Help.Contents" };
gk[4]["F1"].control = {  brev:"HowDoI", name:"Help.HowDoI" };
gk[4]["F1"].normal = {  brev:"F1Help", name:"Help.F1Help" };
gk[4]["F1"].shift = {  brev:"WindowHelp", name:"Help.WindowHelp" };
gk[4]["F10"] = {};
gk[4]["F10"].alt = {  brev:"ApplyCodeChanges", name:"Debug.ApplyCodeChanges" };
gk[4]["F10"].controlalt = {  brev:"StepOverCurrentProcess", name:"Debug.StepOverCurrentProcess" };
gk[4]["F10"].control = {  brev:"RunToCursor", name:"Debug.RunToCursor" };
gk[4]["F10"].controlshift = {  brev:"SetNextStatement", name:"Debug.SetNextStatement" };
gk[4]["F10"].normal = {  brev:"StepOver", name:"Debug.StepOver" };
gk[4]["F11"] = {};
gk[4]["F11"].alt = {  brev:"MacrosIDE", name:"Tools.MacrosIDE" };
gk[4]["F11"].controlalt = {  brev:"StepIntoCurrentProcess", name:"Debug.StepIntoCurrentProcess" };
gk[4]["F11"].control = {  brev:"ToggleDisassembly", name:"Debug.ToggleDisassembly" };
gk[4]["F11"].controlshiftalt = {  brev:"StepOutCurrentProcess", name:"Debug.StepOutCurrentProcess" };
gk[4]["F11"].normal = {  brev:"StepInto", name:"Debug.StepInto" };
gk[4]["F11"].shift = {  brev:"StepOut", name:"Debug.StepOut" };
gk[4]["F12"] = {};
gk[4]["F12"].alt = {  brev:"FindSymbol", name:"Edit.FindSymbol" };
gk[4]["F12"].controlalt = {  brev:"FindSymbolResults", name:"View.FindSymbolResults" };
gk[4]["F12"].control = {  brev:"GoToDeclaration", name:"Edit.GoToDeclaration" };
gk[4]["F12"].controlshift = {  brev:"NextError", name:"View.NextError" };
gk[4]["F12"].normal = {  brev:"GoToDefinition", name:"Edit.GoToDefinition" };
gk[4]["F12"].shiftalt = {  brev:"QuickFindSymbol", name:"Edit.QuickFindSymbol" };
gk[4]["F12"].shift = {  brev:"FindAllReferences", name:"Edit.FindAllReferences" };
gk[4]["F2"] = {};
gk[4]["F2"].controlalt = {  brev:"Index", name:"Help.Index" };
gk[4]["F2"].control = {  brev:"MovetoNavigationBar", name:"Window.MovetoNavigationBar" };
gk[4]["F2"].normal = {  brev:"EditLabel", name:"View.EditLabel" };
gk[4]["F3"] = {};
gk[4]["F3"].alt = {  brev:"StopSearch#", name:"Edit.StopSearch#" };
gk[4]["F3"].controlalt = {  brev:"Search", name:"Help.Search" };
gk[4]["F3"].control = {  brev:"FindNextSelected", name:"Edit.FindNextSelected" };
gk[4]["F3"].controlshift = {  brev:"FindPreviousSelected", name:"Edit.FindPreviousSelected" };
gk[4]["F3"].normal = {  brev:"FindNext", name:"Edit.FindNext" };
gk[4]["F3"].shiftalt = {  brev:"SearchResults", name:"Help.SearchResults" };
gk[4]["F3"].shift = {  brev:"FindPrevious", name:"Edit.FindPrevious" };
gk[4]["F4"] = {};
gk[4]["F4"].control = {  brev:"CloseDocumentWindow", name:"Window.CloseDocumentWindow" };
gk[4]["F4"].normal = {  brev:"PropertiesWindow", name:"View.PropertiesWindow" };
gk[4]["F4"].shift = {  brev:"PropertyPages", name:"View.PropertyPages" };
gk[4]["F5"] = {};
gk[4]["F5"].alt = {  brev:"StepInto", name:"Data.StepInto" };
gk[4]["F5"].controlalt = {  brev:"Execute", name:"Data.Execute" };
gk[4]["F5"].control = {  brev:"StartWithoutDebugging", name:"Debug.StartWithoutDebugging" };
gk[4]["F5"].controlshift = {  brev:"Restart", name:"Debug.Restart" };
gk[4]["F5"].normal = {  brev:"Start", name:"Debug.Start" };
gk[4]["F5"].shiftalt = {  brev:"StartWithApplicationVerifier", name:"Debug.StartWithApplicationVerifier" };
gk[4]["F5"].shift = {  brev:"StopDebugging", name:"Debug.StopDebugging" };
gk[4]["F6"] = {};
gk[4]["F6"].alt = {  brev:"NextPane", name:"Window.NextPane" };
gk[4]["F6"].control = {  brev:"NextDocumentWindow", name:"Window.NextDocumentWindow" };
gk[4]["F6"].controlshift = {  brev:"PreviousDocumentWindow", name:"Window.PreviousDocumentWindow" };
gk[4]["F6"].normal = {  brev:"NextSplitPane", name:"Window.NextSplitPane" };
gk[4]["F6"].shiftalt = {  brev:"PreviousPane", name:"Window.PreviousPane" };
gk[4]["F6"].shift = {  brev:"PreviousSplitPane", name:"Window.PreviousSplitPane" };
gk[4]["F7"] = {};
gk[4]["F7"].alt = {  brev:"NextToolWindowNav", name:"Window.NextToolWindowNav" };
gk[4]["F7"].control = {  brev:"Compile", name:"Build.Compile" };
gk[4]["F7"].normal = {  brev:"ToggleDesigner", name:"View.ToggleDesigner" };
gk[4]["F7"].shiftalt = {  brev:"PreviousToolWindowNav", name:"Window.PreviousToolWindowNav" };
gk[4]["F8"] = {};
gk[4]["F8"].alt = {  brev:"MacroExplorer", name:"View.MacroExplorer" };
gk[4]["F8"].normal = {  brev:"GoToNextLocation", name:"Edit.GoToNextLocation" };
gk[4]["F8"].shift = {  brev:"GoToPrevLocation", name:"Edit.GoToPrevLocation" };
gk[4]["F9"] = {};
gk[4]["F9"].alt = {  brev:"BreakpointsWindow#", name:"DebuggerContextMenus.BreakpointsWindow#" };
gk[4]["F9"].control = {  brev:"EnableBreakpoint", name:"Debug.EnableBreakpoint" };
gk[4]["F9"].controlshift = {  brev:"DeleteAllBreakpoints", name:"Debug.DeleteAllBreakpoints" };
gk[4]["F9"].normal = {  brev:"ToggleBreakpoint", name:"Debug.ToggleBreakpoint" };
gk[4]["F9"].shift = {  brev:"QuickWatch", name:"Debug.QuickWatch" };
gk[4]["G"] = {};
gk[4]["G"].controlalt = {  brev:"Registers", name:"Debug.Registers" };
gk[4]["G"].control = {  brev:"GoTo", name:"Edit.GoTo" };
gk[4]["G"].controlshift = {  brev:"OpenFile", name:"Edit.OpenFile" };
gk[4]["H"] = {};
gk[4]["H"].controlalt = {  brev:"Threads", name:"Debug.Threads" };
gk[4]["H"].control = {  brev:"Replace", name:"Edit.Replace" };
gk[4]["H"].controlshift = {  brev:"ReplaceinFiles", name:"Edit.ReplaceinFiles" };
gk[4]["I"] = {};
gk[4]["I"].controlalt = {  brev:"Immediate", name:"Debug.Immediate" };
gk[4]["Ins"] = {};
gk[4]["Ins"].controlalt = {  brev:"Override", name:"Project.Override" };
gk[4]["Ins"].control = {  brev:"Copy", name:"Edit.Copy" };
gk[4]["Ins"].controlshift = {  brev:"CycleClipboardRing", name:"Edit.CycleClipboardRing" };
gk[4]["Ins"].shift = {  brev:"Paste", name:"Edit.Paste" };
gk[4]["J"] = {};
gk[4]["J"].controlalt = {  brev:"ObjectBrowser", name:"View.ObjectBrowser" };
gk[4]["K"] = {};
gk[4]["K"].control = {  brev:"SnippetsBookmark#", name:"Tools.SnippetsBookmark#" };
gk[4]["L"] = {};
gk[4]["L"].controlalt = {  brev:"SolutionExplorer", name:"View.SolutionExplorer" };
gk[4]["Left"] = {};
gk[4]["Left"].alt = {  brev:"Backward", name:"View.Backward" };
//gk[4]["Left"].normal = {  brev:"MoveControlLeftGrid", name:"Edit.MoveControlLeftGrid" };
gk[4]["Left"].shift = {  brev:"SizeControlLeftGrid", name:"Edit.SizeControlLeftGrid" };
gk[4]["M"] = {};
gk[4]["M"].controlalt = {  brev:"Memory#", name:"Debug.Memory#" };
gk[4]["N"] = {};
gk[4]["N"].controlalt = {  brev:"ScriptExplorer", name:"Debug.ScriptExplorer" };
gk[4]["N"].control = {  brev:"NewFile", name:"File.NewFile" };
gk[4]["N"].controlshift = {  brev:"NewProject", name:"File.NewProject" };
gk[4]["O"] = {};
gk[4]["O"].controlalt = {  brev:"Output", name:"View.Output" };
gk[4]["O"].control = {  brev:"OpenFile", name:"File.OpenFile" };
gk[4]["O"].controlshift = {  brev:"OpenProject", name:"File.OpenProject" };
gk[4]["P"] = {};
gk[4]["P"].controlalt = {  brev:"AttachtoProcess", name:"Tools.AttachtoProcess" };
gk[4]["P"].control = {  brev:"Print", name:"File.Print" };
gk[4]["P"].controlshift = {  brev:"RunTemporaryMacro", name:"Tools.RunTemporaryMacro" };
gk[4]["PgDn"] = {};
gk[4]["PgDn"].control = {  brev:"NextTab", name:"Window.NextTab" };
gk[4]["Q"] = {};
gk[4]["Q"].control = {  brev:"RunSelection", name:"Data.RunSelection" };
gk[4]["R"] = {};
gk[4]["R"].controlalt = {  brev:"WebBrowser", name:"View.WebBrowser" };
gk[4]["R"].control = {  brev:"Refactor#", name:"Refactor.Refactor#" };
gk[4]["R"].controlshift = {  brev:"RecordTemporaryMacro", name:"Tools.RecordTemporaryMacro" };
gk[4]["Right"] = {};
gk[4]["Right"].alt = {  brev:"Forward", name:"View.Forward" };
//gk[4]["Right"].normal = {  brev:"MoveControlRightGrid", name:"Edit.MoveControlRightGrid" };
gk[4]["Right"].shift = {  brev:"SizeControlRightGrid", name:"Edit.SizeControlRightGrid" };
gk[4]["S"] = {};
gk[4]["S"].controlalt = {  brev:"ServerExplorer", name:"View.ServerExplorer" };
gk[4]["S"].control = {  brev:"SaveSelectedItems", name:"File.SaveSelectedItems" };
gk[4]["S"].controlshift = {  brev:"SaveAll", name:"File.SaveAll" };
gk[4]["T"] = {};
gk[4]["T"].controlalt = {  brev:"DocumentOutline", name:"View.DocumentOutline" };
gk[4]["Tab"] = {};
gk[4]["Tab"].controlshift = {  brev:"PreviousDocumentWindowNav", name:"Window.PreviousDocumentWindowNav" };
gk[4]["Tab"].control = {  brev:"NextDocumentWindowNav", name:"Window.NextDocumentWindowNav" };
gk[4]["Tab"].shift = {  brev:"SelectPreviousControl", name:"Edit.SelectPreviousControl" };
gk[4]["Tab"].normal = {  brev:"SelectNextControl", name:"Edit.SelectNextControl" };
gk[4]["U"] = {};
gk[4]["U"].controlalt = {  brev:"Modules", name:"Debug.Modules" };
gk[4]["Up"] = {};
gk[4]["Up"].shift = {  brev:"SizeControlUpGrid", name:"Edit.SizeControlUpGrid" };
//gk[4]["Up"].normal = {  brev:"MoveControlUpGrid", name:"Edit.MoveControlUpGrid" };
gk[4]["V"] = {};
gk[4]["V"].controlalt = {  brev:"Watch#", name:"Debug.Watch#" };
gk[4]["W"] = {};
gk[4]["W"].controlshift = {  brev:"ViewinBrowser", name:"File.ViewinBrowser" };
gk[4]["X"] = {};
gk[4]["X"].controlalt = {  brev:"Toolbox", name:"View.Toolbox" };
gk[4]["X"].controlshift = {  brev:"StartSelectedTestProjectwithoutDebugger", name:"Test.StartSelectedTestProjectwithoutDebugger" };
gk[4]["X"].shiftalt = {  brev:"StartSelectedTestProjectwithDebugger", name:"Test.StartSelectedTestProjectwithDebugger" };
gk[4]["Z"] = {};
gk[4]["Z"].controlalt = {  brev:"Processes", name:"Debug.Processes" };
gk[4]["Z"].controlshift = {  brev:"Redo", name:"Edit.Redo" };
gk[5] = {};
gk[5]["B"] = {};
gk[5]["B"].control = {  brev:"Bold", name:"Format.Bold" };
gk[5]["Down"] = {};
gk[5]["Down"].controlalt = {  brev:"InsertRowBelow", name:"Layout.InsertRowBelow" };
gk[5]["F7"] = {};
gk[5]["F7"].shift = {  brev:"ViewMarkup", name:"View.ViewMarkup" };
gk[5]["I"] = {};
gk[5]["I"].control = {  brev:"Italic", name:"Format.Italic" };
gk[5]["L"] = {};
gk[5]["L"].control = {  brev:"ConverttoHyperlink", name:"Format.ConverttoHyperlink" };
gk[5]["L"].controlshift = {  brev:"InsertBookmark", name:"Format.InsertBookmark" };
gk[5]["Left"] = {};
gk[5]["Left"].controlalt = {  brev:"InsertColumntotheLeft", name:"Layout.InsertColumntotheLeft" };
gk[5]["M"] = {};
gk[5]["M"].control = {  brev:"Content#", name:"Project.Content#" };
gk[5]["Q"] = {};
gk[5]["Q"].controlalt = {  brev:"NonVisualControls", name:"View.NonVisualControls" };
gk[5]["Q"].control = {  brev:"VisibleBorders", name:"View.VisibleBorders" };
gk[5]["Q"].controlshift = {  brev:"Details", name:"View.Details" };
gk[5]["Right"] = {};
gk[5]["Right"].controlalt = {  brev:"InsertColumntotheRight", name:"Layout.InsertColumntotheRight" };
gk[5]["U"] = {};
gk[5]["U"].control = {  brev:"Underline", name:"Format.Underline" };
gk[5]["Up"] = {};
gk[5]["Up"].controlalt = {  brev:"InsertRowAbove", name:"Layout.InsertRowAbove" };
gk[6] = {};
gk[6]["."] = {};
gk[6]["."].controlshift = {  brev:"AutoCloseTagOverride", name:"View.AutoCloseTagOverride" };
gk[6]["F7"] = {};
gk[6]["F7"].shift = {  brev:"ViewDesigner", name:"View.ViewDesigner" };
gk[6]["PgDn"] = {};
gk[6]["PgDn"].control = {  brev:"NextView", name:"View.NextView" };
gk[6]["PgUp"] = {};
gk[6]["PgUp"].control = {  brev:"PreviousTab", name:"Window.PreviousTab" };
gk[7] = {};
gk[7]["1"] = {};
gk[7]["1"].control = {  brev:"Strings", name:"Resources.Strings" };
gk[7]["2"] = {};
gk[7]["2"].control = {  brev:"Images", name:"Resources.Images" };
gk[7]["3"] = {};
gk[7]["3"].control = {  brev:"Icons", name:"Resources.Icons" };
gk[7]["4"] = {};
gk[7]["4"].control = {  brev:"Audio", name:"Resources.Audio" };
gk[7]["5"] = {};
gk[7]["5"].control = {  brev:"Files", name:"Resources.Files" };
gk[7]["6"] = {};
gk[7]["6"].control = {  brev:"Other", name:"Resources.Other" };
gk[7]["Del"] = {};
gk[7]["Del"].normal = {  brev:"Remove", name:"Edit.Remove" };
gk[8] = {};
gk[8]["D"] = {};
gk[8]["D"].controlalt = {  brev:"Datasets", name:"View.Datasets" };
gk[8]["Down"] = {};
gk[8]["Down"].control = {  brev:"MoveControlDown", name:"Edit.MoveControlDown" };
gk[8]["Down"].controlshift = {  brev:"SizeControlDown", name:"Edit.SizeControlDown" };
gk[8]["Down"].normal = {  brev:"LineDown", name:"Edit.LineDown" };
gk[8]["Down"].shift = {  brev:"LineDownExtend", name:"Edit.LineDownExtend" };
gk[8]["Enter"] = {};
gk[8]["Enter"].normal = {  brev:"BreakLine", name:"Edit.BreakLine" };
gk[8]["Left"] = {};
gk[8]["Left"].control = {  brev:"MoveControlLeft", name:"Edit.MoveControlLeft" };
gk[8]["Left"].controlshift = {  brev:"SizeControlLeft", name:"Edit.SizeControlLeft" };
gk[8]["Left"].normal = {  brev:"CharLeft", name:"Edit.CharLeft" };
gk[8]["Left"].shift = {  brev:"CharLeftExtend", name:"Edit.CharLeftExtend" };
gk[8]["Right"] = {};
gk[8]["Right"].control = {  brev:"MoveControlRight", name:"Edit.MoveControlRight" };
gk[8]["Right"].controlshift = {  brev:"SizeControlRight", name:"Edit.SizeControlRight" };
gk[8]["Right"].normal = {  brev:"CharRight", name:"Edit.CharRight" };
gk[8]["Right"].shift = {  brev:"CharRightExtend", name:"Edit.CharRightExtend" };
gk[8]["Tab"] = {};
gk[8]["Tab"].shift = {  brev:"TabLeft", name:"Edit.TabLeft" };
gk[8]["Tab"].normal = {  brev:"InsertTab", name:"Edit.InsertTab" };
gk[8]["Up"] = {};
gk[8]["Up"].controlshift = {  brev:"SizeControlUp", name:"Edit.SizeControlUp" };
gk[8]["Up"].control = {  brev:"MoveControlUp", name:"Edit.MoveControlUp" };
gk[8]["Up"].shift = {  brev:"LineUpExtend", name:"Edit.LineUpExtend" };
gk[8]["Up"].normal = {  brev:"LineUp", name:"Edit.LineUp" };
gk[9] = {};
gk[9]["Del"] = {};
gk[9]["Del"].control = {  brev:"RemoveRow", name:"Edit.RemoveRow" };
gk[9]["Esc"] = {};
gk[9]["Esc"].normal = {  brev:"SelectionCancel", name:"Edit.SelectionCancel" };
gk[9]["F2"] = {};
gk[9]["F2"].normal = {  brev:"EditCell", name:"Edit.EditCell" };
gk[10] = {};
gk[10][","] = {};
gk[10][","].alt = {  brev:"DecreaseFilterLevel", name:"Edit.DecreaseFilterLevel" };
gk[10]["."] = {};
gk[10]["."].alt = {  brev:"IncreaseFilterLevel", name:"Edit.IncreaseFilterLevel" };
gk[10]["]"] = {};
gk[10]["]"].control = {  brev:"GotoBrace", name:"Edit.GotoBrace" };
gk[10]["]"].controlshift = {  brev:"GotoBraceExtend", name:"Edit.GotoBraceExtend" };
gk[10]["="] = {};
gk[10]["="].control = {  brev:"SelectToLastGoBack", name:"Edit.SelectToLastGoBack" };
gk[10]["Bkspce"] = {};
gk[10]["Bkspce"].normal = {  brev:"DeleteBackwards", name:"Edit.DeleteBackwards" };
gk[10]["Bkspce"].control = {  brev:"WordDeleteToStart", name:"Edit.WordDeleteToStart" };
gk[10]["C"] = {};
gk[10]["C"].controlshiftalt = {  brev:"CopyParameterTip", name:"Edit.CopyParameterTip" };
gk[10]["Del"] = {};
gk[10]["Del"].control = {  brev:"WordDeleteToEnd", name:"Edit.WordDeleteToEnd" };
gk[10]["Down"] = {};
gk[10]["Down"].control = {  brev:"ScrollLineDown", name:"Edit.ScrollLineDown" };
gk[10]["Down"].shiftalt = {  brev:"LineDownExtendColumn", name:"Edit.LineDownExtendColumn" };
gk[10]["E"] = {};
gk[10]["E"].control = {  brev:"ToggleWordWrap#", name:"Edit.ToggleWordWrap#" };
gk[10]["End"] = {};
gk[10]["End"].normal = {  brev:"LineEnd", name:"Edit.LineEnd" };
gk[10]["End"].shiftalt = {  brev:"LineEndExtendColumn", name:"Edit.LineEndExtendColumn" };
gk[10]["End"].shift = {  brev:"LineEndExtend", name:"Edit.LineEndExtend" };
gk[10]["Enter"] = {};
gk[10]["Enter"].control = {  brev:"LineOpenAbove", name:"Edit.LineOpenAbove" };
gk[10]["Enter"].controlshift = {  brev:"LineOpenBelow", name:"Edit.LineOpenBelow" };
gk[10]["Home"] = {};
gk[10]["Home"].normal = {  brev:"LineStart", name:"Edit.LineStart" };
gk[10]["Home"].shiftalt = {  brev:"LineStartExtendColumn", name:"Edit.LineStartExtendColumn" };
gk[10]["Home"].shift = {  brev:"LineStartExtend", name:"Edit.LineStartExtend" };
gk[10]["I"] = {};
gk[10]["I"].control = {  brev:"IncrementalSearch", name:"Edit.IncrementalSearch" };
gk[10]["I"].controlshift = {  brev:"ReverseIncrementalSearch", name:"Edit.ReverseIncrementalSearch" };
gk[10]["Ins"] = {};
gk[10]["Ins"].normal = {  brev:"OvertypeMode", name:"Edit.OvertypeMode" };
gk[10]["J"] = {};
gk[10]["J"].control = {  brev:"ListMembers", name:"Edit.ListMembers" };
gk[10]["K"] = {};
gk[10]["K"].control = {  brev:"Bookmarks#", name:"Edit.Bookmarks#" };
gk[10]["L"] = {};
gk[10]["L"].control = {  brev:"LineCut", name:"Edit.LineCut" };
gk[10]["L"].controlshift = {  brev:"LineDelete", name:"Edit.LineDelete" };
gk[10]["Left"] = {};
gk[10]["Left"].control = {  brev:"WordPrevious", name:"Edit.WordPrevious" };
gk[10]["Left"].controlshiftalt = {  brev:"WordPreviousExtendColumn", name:"Edit.WordPreviousExtendColumn" };
gk[10]["Left"].controlshift = {  brev:"WordPreviousExtend", name:"Edit.WordPreviousExtend" };
gk[10]["Left"].shiftalt = {  brev:"CharLeftExtendColumn", name:"Edit.CharLeftExtendColumn" };
gk[10]["M"] = {};
gk[10]["M"].control = {  brev:"Outlining", name:"Edit.Outlining" };
gk[10]["P"] = {};
gk[10]["P"].controlshiftalt = {  brev:"PasteParameterTip", name:"Edit.PasteParameterTip" };
gk[10]["PgDn"] = {};
gk[10]["PgDn"].control = {  brev:"ViewBottom", name:"Edit.ViewBottom" };
gk[10]["PgDn"].controlshift = {  brev:"ViewBottomExtend", name:"Edit.ViewBottomExtend" };
gk[10]["PgDn"].normal = {  brev:"PageDown", name:"Edit.PageDown" };
gk[10]["PgDn"].shift = {  brev:"PageDownExtend", name:"Edit.PageDownExtend" };
gk[10]["PgUp"] = {};
gk[10]["PgUp"].control = {  brev:"ViewTop", name:"Edit.ViewTop" };
gk[10]["PgUp"].controlshift = {  brev:"ViewTopExtend", name:"Edit.ViewTopExtend" };
gk[10]["PgUp"].normal = {  brev:"PageUp", name:"Edit.PageUp" };
gk[10]["PgUp"].shift = {  brev:"PageUpExtend", name:"Edit.PageUpExtend" };
gk[10]["R"] = {};
gk[10]["R"].control = {  brev:"ViewWhiteSpace#", name:"Edit.ViewWhiteSpace#" };
gk[10]["Right"] = {};
gk[10]["Right"].control = {  brev:"WordNext", name:"Edit.WordNext" };
gk[10]["Right"].controlshiftalt = {  brev:"WordNextExtendColumn", name:"Edit.WordNextExtendColumn" };
gk[10]["Right"].controlshift = {  brev:"WordNextExtend", name:"Edit.WordNextExtend" };
gk[10]["Right"].shiftalt = {  brev:"CharRightExtendColumn", name:"Edit.CharRightExtendColumn" };
gk[10]["Space"] = {};
gk[10]["Space"].controlshift = {  brev:"ParameterInfo", name:"Edit.ParameterInfo" };
gk[10]["Space"].control = {  brev:"CompleteWord", name:"Edit.CompleteWord" };
gk[10]["T"] = {};
gk[10]["T"].controlshift = {  brev:"WordTranspose", name:"Edit.WordTranspose" };
gk[10]["T"].control = {  brev:"CharTranspose", name:"Edit.CharTranspose" };
gk[10]["T"].shiftalt = {  brev:"LineTranspose", name:"Edit.LineTranspose" };
gk[10]["U"] = {};
gk[10]["U"].controlshift = {  brev:"MakeUppercase", name:"Edit.MakeUppercase" };
gk[10]["U"].control = {  brev:"MakeLowercase", name:"Edit.MakeLowercase" };
gk[10]["Up"] = {};
gk[10]["Up"].control = {  brev:"ScrollLineUp", name:"Edit.ScrollLineUp" };
gk[10]["Up"].shiftalt = {  brev:"LineUpExtendColumn", name:"Edit.LineUpExtendColumn" };
gk[10]["W"] = {};
gk[10]["W"].control = {  brev:"SelectCurrentWord", name:"Edit.SelectCurrentWord" };
gk[11] = {};
gk[11]["Ins"] = {};
gk[11]["Ins"].normal = {  brev:"NewAccelerator", name:"Edit.NewAccelerator" };
gk[11]["W"] = {};
gk[11]["W"].control = {  brev:"NextKeyTyped", name:"Edit.NextKeyTyped" };
gk[12] = {};
gk[12]["B"] = {};
gk[12]["B"].control = {  brev:"ButtonBottom", name:"Format.ButtonBottom" };
gk[12]["D"] = {};
gk[12]["D"].control = {  brev:"TabOrder", name:"Format.TabOrder" };
gk[12]["Down"] = {};
gk[12]["Down"].controlshift = {  brev:"AlignBottoms", name:"Format.AlignBottoms" };
gk[12]["F7"] = {};
gk[12]["F7"].shift = {  brev:"SizetoContent", name:"Format.SizetoContent" };
gk[12]["F9"] = {};
gk[12]["F9"].control = {  brev:"CenterVertical", name:"Format.CenterVertical" };
gk[12]["F9"].controlshift = {  brev:"CenterHorizontal", name:"Format.CenterHorizontal" };
gk[12]["F9"].normal = {  brev:"AlignMiddles", name:"Format.AlignMiddles" };
gk[12]["F9"].shift = {  brev:"AlignCenters", name:"Format.AlignCenters" };
gk[12]["G"] = {};
gk[12]["G"].control = {  brev:"ToggleGuides", name:"Format.ToggleGuides" };
gk[12]["Left"] = {};
gk[12]["Left"].control = {  brev:"ScrollColumnLeft", name:"Edit.ScrollColumnLeft" };
gk[12]["Left"].controlshift = {  brev:"AlignLefts", name:"Format.AlignLefts" };
gk[12]["M"] = {};
gk[12]["M"].control = {  brev:"CheckMnemonics", name:"Format.CheckMnemonics" };
gk[12]["R"] = {};
gk[12]["R"].control = {  brev:"ButtonRight", name:"Format.ButtonRight" };
gk[12]["Right"] = {};
gk[12]["Right"].alt = {  brev:"SpaceAcross", name:"Format.SpaceAcross" };
gk[12]["Right"].control = {  brev:"ScrollColumnRight", name:"Edit.ScrollColumnRight" };
gk[12]["Right"].controlshift = {  brev:"AlignRights", name:"Format.AlignRights" };
gk[12]["T"] = {};
gk[12]["T"].control = {  brev:"TestDialog", name:"Format.TestDialog" };
gk[12]["Up"] = {};
gk[12]["Up"].alt = {  brev:"SpaceDown", name:"Format.SpaceDown" };
gk[12]["Up"].controlshift = {  brev:"AlignTops", name:"Format.AlignTops" };
gk[13] = {};
gk[13]["-"] = {};
gk[13]["-"].control = {  brev:"SmallerBrush", name:"Image.SmallerBrush" };
gk[13][","] = {};
gk[13][","].controlshift = {  brev:"ZoomOut", name:"Image.ZoomOut" };
gk[13]["."] = {};
gk[13]["."].control = {  brev:"SmallBrush", name:"Image.SmallBrush" };
gk[13]["."].controlshift = {  brev:"ZoomIn", name:"Image.ZoomIn" };
gk[13]["["] = {};
gk[13]["["].control = {  brev:"PreviousColor", name:"Image.PreviousColor" };
gk[13]["["].controlshift = {  brev:"PreviousRightColor", name:"Image.PreviousRightColor" };
gk[13]["]"] = {};
gk[13]["]"].control = {  brev:"NextColor", name:"Image.NextColor" };
gk[13]["]"].controlshift = {  brev:"NextRightColor", name:"Image.NextRightColor" };
gk[13]["="] = {};
gk[13]["="].control = {  brev:"LargerBrush", name:"Image.LargerBrush" };
gk[13]["A"] = {};
gk[13]["A"].control = {  brev:"AirbrushTool", name:"Image.AirbrushTool" };
gk[13]["B"] = {};
gk[13]["B"].control = {  brev:"BrushTool", name:"Image.BrushTool" };
gk[13]["F"] = {};
gk[13]["F"].control = {  brev:"FillTool", name:"Image.FillTool" };
gk[13]["H"] = {};
gk[13]["H"].control = {  brev:"FlipHorizontal", name:"Image.FlipHorizontal" };
gk[13]["H"].controlshift = {  brev:"Rotate90Degrees", name:"Image.Rotate90Degrees" };
gk[13]["H"].shiftalt = {  brev:"FlipVertical", name:"Image.FlipVertical" };
gk[13]["I"] = {};
gk[13]["I"].control = {  brev:"PencilTool", name:"Image.PencilTool" };
gk[13]["I"].controlshift = {  brev:"EraseTool", name:"Image.EraseTool" };
gk[13]["Ins"] = {};
gk[13]["Ins"].normal = {  brev:"NewImageType", name:"Image.NewImageType" };
gk[13]["J"] = {};
gk[13]["J"].control = {  brev:"DrawOpaque", name:"Image.DrawOpaque" };
gk[13]["L"] = {};
gk[13]["L"].control = {  brev:"LineTool", name:"Image.LineTool" };
gk[13]["M"] = {};
gk[13]["M"].control = {  brev:"MagnificationTool", name:"Image.MagnificationTool" };
gk[13]["M"].controlshift = {  brev:"Magnify", name:"Image.Magnify" };
gk[13]["P"] = {};
gk[13]["P"].alt = {  brev:"EllipseTool", name:"Image.EllipseTool" };
gk[13]["P"].controlshiftalt = {  brev:"FilledEllipseTool", name:"Image.FilledEllipseTool" };
gk[13]["P"].shiftalt = {  brev:"OutlinedEllipseTool", name:"Image.OutlinedEllipseTool" };
gk[13]["R"] = {};
gk[13]["R"].alt = {  brev:"RectangleTool", name:"Image.RectangleTool" };
gk[13]["R"].controlshiftalt = {  brev:"FilledRectangleTool", name:"Image.FilledRectangleTool" };
gk[13]["R"].shiftalt = {  brev:"OutlinedRectangleTool", name:"Image.OutlinedRectangleTool" };
gk[13]["S"] = {};
gk[13]["S"].controlalt = {  brev:"ShowGrid", name:"Image.ShowGrid" };
gk[13]["S"].controlshiftalt = {  brev:"ShowTileGrid", name:"Image.ShowTileGrid" };
gk[13]["S"].shiftalt = {  brev:"RectangleSelectionTool", name:"Image.RectangleSelectionTool" };
gk[13]["T"] = {};
gk[13]["T"].control = {  brev:"TextTool", name:"Image.TextTool" };
gk[13]["U"] = {};
gk[13]["U"].controlshift = {  brev:"CopyandOutlineSelection", name:"Image.CopyandOutlineSelection" };
gk[13]["U"].control = {  brev:"UseSelectionasBrush", name:"Image.UseSelectionasBrush" };
gk[13]["W"] = {};
gk[13]["W"].alt = {  brev:"RoundedRectangleTool", name:"Image.RoundedRectangleTool" };
gk[13]["W"].controlshiftalt = {  brev:"FilledRoundedRectangleTool", name:"Image.FilledRoundedRectangleTool" };
gk[13]["W"].shiftalt = {  brev:"OutlinedRoundedRectangleTool", name:"Image.OutlinedRoundedRectangleTool" };
gk[14] = {};
gk[14]["Ins"] = {};
gk[14]["Ins"].normal = {  brev:"NewString", name:"Edit.NewString" };
gk[15] = {};
gk[15]["1"] = {};
gk[15]["1"].control = {  brev:"Diagram", name:"QueryDesigner.Diagram" };
gk[15]["2"] = {};
gk[15]["2"].control = {  brev:"Criteria", name:"QueryDesigner.Criteria" };
gk[15]["3"] = {};
gk[15]["3"].control = {  brev:"SQL", name:"QueryDesigner.SQL" };
gk[15]["4"] = {};
gk[15]["4"].control = {  brev:"Results", name:"QueryDesigner.Results" };
gk[15]["G"] = {};
gk[15]["G"].control = {  brev:"GotoRow", name:"QueryDesigner.GotoRow" };
gk[15]["J"] = {};
gk[15]["J"].controlshift = {  brev:"JoinMode", name:"QueryDesigner.JoinMode" };
gk[15]["R"] = {};
gk[15]["R"].control = {  brev:"ExecuteSQL", name:"QueryDesigner.ExecuteSQL" };
gk[15]["T"] = {};
gk[15]["T"].control = {  brev:"CancelRetrievingData", name:"QueryDesigner.CancelRetrievingData" };
gk[16] = {};
gk[16]["Down"] = {};
gk[16]["Down"].alt = {  brev:"Nexttopic", name:"Help.Nexttopic" };
gk[16]["Up"] = {};
gk[16]["Up"].alt = {  brev:"Previoustopic", name:"Help.Previoustopic" };
gk[17] = {};
gk[17]["End"] = {};
gk[17]["End"].normal = {  brev:"DocumentEnd", name:"Edit.DocumentEnd" };
gk[17]["End"].shift = {  brev:"DocumentEndExtend", name:"Edit.DocumentEndExtend" };
gk[17]["Home"] = {};
gk[17]["Home"].normal = {  brev:"DocumentStart", name:"Edit.DocumentStart" };
gk[17]["Home"].shift = {  brev:"DocumentStartExtend", name:"Edit.DocumentStartExtend" };
gk[18] = {};
gk[18]["-"] = {};
gk[18]["-"].control = {  brev:"Collapse", name:"Schema.Collapse" };
gk[18]["="] = {};
gk[18]["="].control = {  brev:"Expand", name:"Schema.Expand" };
 