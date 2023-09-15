
var textarea = $('.term');
var speed = 55; //Writing speed in milliseconds
var text = '@bodesx portfolio_website.sh Activating Matrix...';
var i = 0;
runner();

function runner() {
  textarea.append(text.charAt(i));
  i++;
  setTimeout(
    function() {
      if (i < text.length)
        runner();
      else {
        textarea.append("<br>")
        i = 0;
        setTimeout(function() {feedbacker();}, 1000);
      }
    }, Math.floor(Math.random() * 220) + 50);
}

var count = 0;
var time = 1;
function feedbacker() {
  textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  if (time % 2 == 0) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  }
  if (time == 3) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  }
 
  time = Math.floor(Math.random() * 4) + 1;
  count += time;
  setTimeout(
    function() {
      if (i < output.length - 2)
        feedbacker();
      else {
        textarea.append("<br>Initializing...<br>");
        setTimeout(function() {$(".load").fadeOut(1000);}, 500);
      }
    },time);
}

var output = ["CPU0 microcode updated early to revision 0x1b, date = 2014-05-29",
"Initializing cgroup subsys cpuset",
"Initializing cgroup subsys cpu",
"Initializing cgroup subsys cpuacct",
"Command line: BOOT_IMAGE=/vmlinuz-3.19.0-21-generic.efi.signed root=UUID=14ac372e-6980-4fe8-b247-fae92d54b0c5 ro quiet splash acpi_enforce_resources=lax intel_pstate=enable rcutree.rcu_idle_gp_delay=1 nouveau.runpm=0 vt.handoff=7",
"KERNEL supported cpus:",
"  Intel GenuineIntel",
"  AMD AuthenticAMD",
"  Centaur CentaurHauls",
"e820: BIOS-provided physical RAM map:",
"BIOS-e820: [mem 0x0000000000000000-0x000000000009dfff] usable",
"BIOS-e820: [mem 0x000000000009e000-0x000000000009ffff] reserved",
"BIOS-e820: [mem 0x0000000000100000-0x000000001fffffff] usable",
"BIOS-e820: [mem 0x0000000020000000-0x00000000201fffff] reserved",
"BIOS-e820: [mem 0x0000000020200000-0x0000000040003fff] usable",
"BIOS-e820: [mem 0x0000000040004000-0x0000000040004fff] reserved",
"BIOS-e820: [mem 0x0000000040005000-0x00000000c9746fff] usable",
"BIOS-e820: [mem 0x00000000c9747000-0x00000000c9d47fff] ACPI NVS",""];
