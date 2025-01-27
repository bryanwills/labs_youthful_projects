
from .midiutil import Enumeration

channelVoiceMessages = Enumeration([("NOTE_OFF", 0x80, 'NoteOff'),
                                    ("NOTE_ON", 0x90, 'NoteOn'),
                                    ("POLYPHONIC_KEY_PRESSURE", 0xA0,'Polyphonic Key Pressure'),
                                    ("CONTROLLER_CHANGE", 0xB0,'Controller Change'),
                                    ("PROGRAM_CHANGE", 0xC0,'Program Change'),
                                    ("CHANNEL_KEY_PRESSURE", 0xD0,'Channel Key Pressure'),
                                    ("PITCH_BEND", 0xE0,'PitchBend')])

channelModeMessages = Enumeration([("ALL_SOUND_OFF", 0x78,'All Sound Off'),
                                   ("RESET_ALL_CONTROLLERS", 0x79,'Reset All Controllers'),
                                   ("LOCAL_CONTROL", 0x7A,'Local Control'),
                                   ("ALL_NOTES_OFF", 0x7B,'All Notes Off'),
                                   ("OMNI_MODE_OFF", 0x7C,'Omni Mode Off'),
                                   ("OMNI_MODE_ON", 0x7D,'Omni Mode On'),
                                   ("MONO_MODE_ON", 0x7E,'Mono Mode On'),
                                   ("POLY_MODE_ON", 0x7F,'Poly Mode On')])


metaEvents = Enumeration([("SEQUENCE_NUMBER", 0x00,'Sequence Number'),
                          ("TEXT_EVENT", 0x01,'Text Event'),
                          ("COPYRIGHT_NOTICE", 0x02,'Copyright Notice'),
                          ("SEQUENCE_TRACK_NAME", 0x03,'Sequence Track Name'),
                          ("INSTRUMENT_NAME", 0x04,'Instrument Name'),
                          ("LYRIC", 0x05,'Lyric'),
                          ("MARKER", 0x06,'Marker'),
                          ("CUE_POINT", 0x07,'Cue Point'),
                          ("MIDI_CHANNEL_PREFIX", 0x20,'Midi Channel Prefix'),
                          ("MIDI_PORT", 0x21,'Midi Port'),
                          ("END_OF_TRACK", 0x2F,'EndOfTrack'),
                          ("SET_TEMPO", 0x51,'SetTempo'),
                          ("SMTPE_OFFSET", 0x54,'Smtpe Offset'),
                          ("TIME_SIGNATURE", 0x58,'Time Signature'),
                          ("KEY_SIGNATURE", 0x59,'Key Signature'),
                          ("SEQUENCER_SPECIFIC_META_EVENT", 0x7F,'Sequencer Specific Meta Event')])


controllerTypes = Enumeration([
        ('BANK_SELECT',0x00, 'Bank Select'),
        ('MODULATION',0x01, 'Modulation'), #Causes a modulation in pitch or vibrato effect
        ('BREATH_CONTROLLER',0x02, 'Breath Controller'),
        ('FOOT_CONTROLLER',0x04, 'Foot Controller'),
        ('PORTAMENTO_TIME',0x05, 'Portamento Time'),
        ('DATA_ENTRY',0x06, 'Data Entry (MSB)'),
        ('VOLUME',0x07, 'Volume'), #Sets the relative volume of all notes in the channel
        ('BALANCE',0x08, 'Balance'),
        ('PAN',0x0A, 'Pan'), #Positions the channel to the left or right. 0 is left; 64 is center; and 127 is right.
        ('EXPRESSION_CONTROLLER',0x0B, 'Expression Controller'), #Similar to volume but can be used repeatedly to control the dynamics of just one note.
        ('EFFECT_CONTROL_1',0x0C, 'Effect Control 1'),
        ('EFFECT_CONTROL_2',0x0D, 'Effect Control 2'),
        ('DAMPER_PEDAL_(SUSTAIN)',0x40, 'Damper pedal (Sustain)'), #0 is "up" and 127 is "down". The effect will blur note values while down.
        ('PORTAMENTO',0x41, 'Portamento'),
        ('SOSTENUTO',0x42, 'Sostenuto'),
        ('SOFT_PEDAL',0x43, 'Soft Pedal'),
        ('LEGATO_FOOTSWITCH',0x44, 'Legato Footswitch'),
        ('HOLD_2',0x45, 'Hold 2'),
        ('SOUND_CONTROLLER_1',0x46, 'Sound Controller 1 (Timber Variation)'),
        ('SOUND_CONTROLLER_2',0x47, 'Sound Controller 2 (Timber/Harmonic Content)'),
        ('SOUND_CONTROLLER_3',0x48, 'Sound Controller 3 (Release Time)'),
        ('SOUND_CONTROLLER_4',0x49, 'Sound Controller 4 (Attack Time)'),
        ('PORTAMENTO_CONTROL',0x54, 'Portamento Control'),
        ('EFFECTS_1',0x5B, 'Effects 1 Depth (External Effects Depth)'), #This "reverb" effect will cause echoes.
        ('EFFECTS_2',0x5C, 'Effects 2 Depth (Tremolo Depth)'),
        ('EFFECTS_3',0x5D, 'Effects 3 Depth (Chorus Depth)'), #To specify a "chorus" effect of many voices simultaneously.
        ('EFFECTS_4',0x5E, 'Effects 4 Depth (Celeste Detune)'),
        ('EFFECTS_5',0x5F, 'Effects 5 Depth (Phaser Depth)'),
        ('DATA_INCREMENT',0x60, 'Data Increment'),
        ('DATA_DECREMENT',0x61, 'Data Decrement'),
        ('RESET_ALL',0x79, 'Reset All Controllers'),
        ('LOCAL_CONTROL',0x7A, 'Local Control On/Off'),
        ('ALL_NOTES_OFF',0x7B, 'All Notes Off')])
        
    
#others, not included
#~ (0x10-0x13) 	General-Purpose Controllers 1-4
#~ (0x20-0x3F) 	LSB for controllers 0-31
#~ (0x4A-0x4F) 	Sound Controller 6-10
#~ (0x50-0x53) 	General-Purpose Controllers 5-8
#~ (0x79-0x7F) 	Mode Messages
#~ (0x62) 	Non-Registered Parameter Number (LSB)
#~ (0x63) 	Non-Registered Parameter Number (MSB)
#~ (0x64) 	Registered Parameter Number (LSB)
#~ (0x65) 	Registered Parameter Number (MSB)



def GM_instruments_lookup(strInstrument):
    strInstrument = strInstrument.lower()
    found = None
    for i in range(len(GM_instruments)):
        if strInstrument in GM_instruments[i].lower(): #inefficient to .lower every setInstrument call, but whatever
            found = i; break
    return found
        

GM_instruments = [
'Acoustic Grand Piano',
'Bright Piano',
'Electric Grand Piano',
'Honky-Tonk Piano',
'Electric piano 1',
'Electric Piano 2',
'Harpsichord',
'Clavinet',
'Celesta',
'Glockenspiel',
'Music Box',
'Vibraphone',
'Marimba',
'Xylophone',
'Tubular bells',
'Dulcimer',
'Drawbar Organ',
'Percussive Organ',
'Rock Organ',
'Church Organ',
'Reed Organ',
'Accordion',
'Harmonica',
'Tango Accordion',
'Nylon String Guitar',
'Steel String Guitar',
'Jazz Guitar',
'Clean Electric Guitar',
'Muted Electric Guitar',
'Overdrive Guitar',
'Distortion Guitar',
'Guitar Harmonics',
'Acoustic Bass',
'Fingered Bass',
'Picked Bass',
'Fretless Bass',
'Slap Bass 1',
'Slap Bass 2',
'Synth Bass 1',
'Synth Bass 2',
'Violin',
'Viola',
'Cello',
'Contrabass',
'Tremolo Strings',
'Pizzicato Strings',
'Orchestral Harp',
'Timpani',
'String Ensemble 1',
'String Ensemble 2',
'Synth Strings 1',
'Synth Strings 2',
'Choir Ahh',
'Choir Oohh',
'Synth Voice',
'Orchestral Hit',
'Trumpet',
'Trombone',
'Tuba',
'Muted Trumpet',
'French Horn',
'Brass Section',
'Synth Brass 1',
'Synth Brass 2',
'Soprano Sax',
'Alto Sax',
'Tenor Sax',
'Baritone Sax',
'Oboe',
'English Horn',
'Bassoon',
'Clarinet',
'Piccolo',
'Flute',
'Recorder',
'Pan flute',
'Blown Bottle',
'Shakuhachi',
'Whistle',
'Ocarina',
'Square Wave',
'Sawtooth Wave',
'Caliope',
'Chiff',
'Charang',
'Voice',
'Fifths',
'Bass & Lead',
'New Age',
'Warm',
'PolySynth',
'Choir',
'Bowed',
'Metallic',
'Halo',
'Sweep',
'FX: Rain',
'FX: Soundtrack',
'FX: Crystal',
'FX: Atmosphere',
'FX: Brightness',
'FX: Goblins',
'FX: Echo Drops',
'FX: Star Theme',
'Sitar',
'Banjo',
'Shamisen',
'Koto',
'Kalimba',
'Bagpipe',
'Fiddle',
'Shanai',
'Tinkle bell',
'Agogo',
'Steel Drums',
'Woodblock',
'Taiko Drum',
'Melodic Tom',
'Synth Drum',
'Reverse Cymbal',
'Guitar Fret Noise',
'Breath Noise',
'Seashore',
'Bird Tweet',
'Telephone Ring',
'Helicopter',
'Applause',
'Gunshot']

GM_drums = ['Acoustic Bass Drum',
'Bass Drum 1',
'Side Stick',
'Acoustic Snare',
'Hand Clap',
'Electric Snare',
'Low Floor Tom',
'Closed Hi-Hat',
'High Floor Tom',
'Pedal Hi-Hat',
'Low Tom',
'Open Hi-Hat',
'Low-Mid Tom',
'Hi-Mid Tom',
'Crash Cymbal 1',
'High Tom',
'Ride Cymbal 1',
'Chinese Cymbal',
'Ride Bell',
'Tambourine',
'Splash Cymbal',
'Cowbell',
'Crash Cymbal 2',
'Vibraslap',
'Ride Cymbal 2',
'Hi Bongo',
'Low Bongo',
'Mute Hi Conga',
'Open Hi Conga',
'Low Conga',
'High Timbale',
'Low Timbale',
'High Agogo',
'Low Agogo',
'Cabasa',
'Maracas',
'Short Whistle',
'Long Whistle',
'Short Guiro',
'Long Guiro',
'Claves',
'Hi Wood Block',
'Low Wood Block',
'Mute Cuica',
'Open Cuica',
'Mute Triangle',
'Open Triangle']
