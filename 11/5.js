//������ ��������������� �������
function load(e) {
    if (!e) var e = window.event;
    // ���������� cancelBubble ��� IE 8 � ����� ������ ������
    e.cancelBubble = true;

    if (e.stopPropagation) e.stopPropagation();

    document.getElementById("capTitle").addEventListener("click", makeTiny, true);
    document.getElementById("capEvent").addEventListener("click", makeHuge, true);
    document.getElementById("bubTitle").addEventListener("click", makeTiny, false);
    document.getElementById("bubEvent").addEventListener("click", makeHuge, false);
}